import React from 'react';
import { Chart, Tooltip, Geom, Legend, Axis, Guide } from 'bizcharts';
import DataSet from '@antv/data-set';
import Slider from 'bizcharts-plugin-slider';
import autoHeight from '../autoHeight';
import styles from './index.less';

@autoHeight()
export default class HuSingleLine extends React.Component {

  render() {
    const {
      title,
      height = 400,
      padding = [60, 40, 40, 40],
      borderWidth = 2,
      data = [
        {
          time: 0,
          value: 0,
        },
      ],
      lastAverage,
      thisAverage
    } = this.props;
    const { Line } = Guide;

    const timeScale = {
      type: 'time',
      mask: 'YYYY-MM-DD',
      range: [0, 1],
      tickCount:10
    };
    const cols = {
      'time': timeScale,
      'value': {range: [ 0 , 1] }
    };

    return (
      <div className={styles.timelineChart} style={{ height: height + 30 }}>
        <div>
          {title && <h4 className={styles.titleContainer}>{title}</h4>}
          <Chart height={height} padding={padding} data={data} scale={cols} forceFit>
            <Axis name="time" />
            <Axis name="value" />
            <Tooltip crosshairs={{type : "value",
              showTitle: false}}/>
            <Geom type="line" position="time*value" size={2} />
            <Geom type='point' position="time*value" size={3} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1}} />
            <Guide>
              <Line start={['min',lastAverage]}
                    end= {['max', lastAverage]}
                    text={{
                      content: '上周期平均值：' + lastAverage,
                      position: '80%',
                      style: {
                        textAlign: 'end',
                      }
                    }}
                    lineStyle={{stroke:'#fadb14'}}
              />
              <Line start={['min',thisAverage]}
                    end= {['max', thisAverage]}
                    text={{
                      content: '本周期平均值：' + thisAverage,
                      position: 'end',
                      style: {
                        textAlign: 'end'
                      }
                    }}
                    lineStyle={{stroke:'#73d13d'}}
              />
            </Guide>
          </Chart>
        </div>
      </div>
    );
  }
}
