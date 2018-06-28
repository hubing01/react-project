import React from 'react';
import { Chart, Axis, Geom, Tooltip, Facet, View, Legend, Label, Coord } from 'bizcharts';
import DataSet from '@antv/data-set';
import Slider from 'bizcharts-plugin-slider';
import autoHeight from '../autoHeight';
import styles from './index.less';

@autoHeight()

export default class HuSunburst extends React.Component {

  render() {
    const {
      title,
      height = 400,
      padding = [30, 12, 15, 12],
      data,
      color= ['value', '#BAE7FF-#1890FF-#0050B3'],
      onPlotDblClick
    } = this.props;
    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(data, {
      type: 'hierarchy',
    }).transform({
      type: 'hierarchy.partition', // 根据树形数据生成相邻层次图 Adjacency Diagram 布局
      field: 'sum',
      as: ['x', 'y'],
    });

    const source = [];
    const nodes = dv.getAllNodes();
    nodes.map(node => {
      if (node.depth === 0) { // 父节点不展示
        return;
      }
      const obj = {};
      obj.id = node.data.id;
      obj.label = node.data.label;
      obj.sum = node.data.sum;
      obj.value = node.value;
      obj.x = node.x;
      obj.y = node.y;
      source.push(obj);
      return node;
    });

    return(
      <div className={styles.timelineChart} style={{ height: height + 30 }}>
        <div>
          {title && <h4 className={styles.titleContainer}>{title}</h4>}
          <Chart height={height} padding={padding}  data={source} forceFit={true}
                 onPlotDblClick={onPlotDblClick}>
            <Coord type='polar' innerRadius={0.3} />
            <Tooltip showTitle={false} />
            <Geom type='polygon' position='x*y' active={false} color={color}
                  style={{stroke: '#FFF',lineWidth: 1}} tooltip='label*value' />
          </Chart>
        </div>
      </div>
    )
  }

}
