import React, { Component } from 'react';
import { Chart, Axis, Tooltip, Geom, Legend } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
import styles from '../index.less';

@autoHeight()
class HuBarAndLine extends Component {
  state = {
    autoHideXLabels: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  @Bind()
  @Debounce(400)
  resize() {
    if (!this.node) {
      return;
    }
    const canvasWidth = this.node.parentNode.clientWidth;
    const { data = [], autoLabel = true } = this.props;
    if (!autoLabel) {
      return;
    }
    const minWidth = data.length * 30;
    const { autoHideXLabels } = this.state;

    if (canvasWidth <= minWidth) {
      if (!autoHideXLabels) {
        this.setState({
          autoHideXLabels: true,
        });
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false,
      });
    }
  }

  handleRoot = n => {
    this.root = n;
  };

  handleRef = n => {
    this.node = n;
  };

  render() {
    const {
      height,
      title,
      forceFit = true,
      data,
      color = 'rgba(24, 144, 255, 0.85)',
      padding,
      scale = {}
    } = this.props;

    const { autoHideXLabels } = this.state;

    const scaleProps = {
      x: {
        type: 'cat',
        ...scale.x,
      },
      y: {
        min: 0,
        ...scale.y,
      },
    }

    const tooltip = [
      'title1*y',
      (title1, y) => ({
        name: title1,
        value: y,
      }),
      'title2*y1',
      (title2, y1) => ({
        name: title2,
        value: y1,
      }),
    ];
    let chartIns = null;
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            scale={scaleProps}
            height={title ? height - 41 : height}
            forceFit={forceFit}
            data={data}
            padding={padding || 'auto'}
          >
            <Legend
              custom={true}
              allowAllCanceled={true}
              items={[
                { value: '销售额', marker: {symbol: 'square', fill: {color}, radius: 5} },
                { value: '销卡额', marker: {symbol: 'hyphen', stroke: '#ffae6b', radius: 5, lineWidth: 3} }
              ]}
              onClick={ ev => {
                const item = ev.item;

                const value = item.value;
                const checked = ev.checked;
                const geoms = chartIns.getAllGeoms();
                for (let i = 0; i < geoms.length; i++) {
                  const geom = geoms[i];
                  if (geom.getYScale().field === value) {
                    if (checked) {
                      geom.show();
                    } else {
                      geom.hide();
                    }
                  }
                }
              }}
            />
            <Axis
              name="x"
              title={false}
              label={autoHideXLabels ? false : {}}
              tickLine={autoHideXLabels ? false : {}}
            />
            <Axis name="y" min={0} />
            <Tooltip showTitle={true} crosshairs={false} />
            <Geom type="interval" position="x*y" color={color} tooltip={tooltip}/>
            <Geom type="line" position="x*y1" color="#fdae6b" size={3} shape="smooth" />
          </Chart>
        </div>
      </div>
    );
  }
}

export default HuBarAndLine;
