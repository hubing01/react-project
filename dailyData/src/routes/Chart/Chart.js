import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd';
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  HuBarAndLine,
  HuPie,
  Pie,
  TimelineChart,
  HuSingleLine,
  HuSunburst
} from 'components/Charts';
import { getTimeDistance } from '../../utils/utils';

import styles from './Chart.less';
// import { TimelineChart } from 'ant-design-pro/lib/Charts';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

const Yuan = ({ children }) => (
  <span dangerouslySetInnerHTML={{ __html: yuan(children) }} /> /* eslint-disable-line react/no-danger */
);

@connect(({ chart, profit, loading }) => ({
  chart,
  profit,
  profitLoading: loading.effects['profit/fetch'],
  loading: loading.effects['chart/fetch'],
}))
export default class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('month'),
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'chart/fetch',
    });
    this.props.dispatch({
      type: 'profit/fetchTimeLineData',
    });
    this.props.dispatch({
      type:'profit/fetchProfitData'
    })
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
  }

  handleRangePickerChange = rangePickerValue => {
    this.setState({
      rangePickerValue,
    });

    this.props.dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  selectDate = type => {
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    this.props.dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  isActive(type) {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return;
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }
  }


  dbClick(ev){
    console.log('ev....',ev);
    console.log('ev.items',ev.data._origin)

  }
  render() {
    const { rangePickerValue } = this.state;
    const { loading ,profitLoading, profit:{
      cardSalesData, otherSalesData, thisMonthData, lastMonthData, profitChartData, realIncomeData, IncomeSunData
      }
    } = this.props;

    const salesExtra = (
      <div className={styles.salesExtraWrap}>
        <div className={styles.salesExtra}>
          <a className={this.isActive('week')} onClick={() => this.selectDate('week')}>
            最近一周
          </a>
          <a className={this.isActive('month')} onClick={() => this.selectDate('month')}>
            最近一月
          </a>
          <a className={this.isActive('year')} onClick={() => this.selectDate('year')}>
            最近一年
          </a>
        </div>
        <RangePicker
          value={rangePickerValue}
          onChange={this.handleRangePickerChange}
          style={{ width: 256 }}
        />
      </div>
    );
    const HuSunburstData = {
      "label": "root",
      "children": [{
        "label": "类别 1",
        "children": [{
          "label": "类别 1.1",
          "children": [{
            "label": "类别 1.1.1",
            "children": [{
              "label": "类别 1.1.1.1",
              "children": [{
                "label": "类别 1.1.1.1.1",
                "children": null,
                "uv": 1,
                "sum": 1,
                "count": 0
              }],
              "uv": 0,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 1,
            "count": 0
          }],
          "uv": 0,
          "sum": 1,
          "count": 0
        }],
        "uv": 0,
        "sum": 1,
        "count": 0
      }, {
        "label": "类别 2",
        "children": [
          {
          "label": "类别 2.1",
          "children": [{
            "label": "类别 2.1.1",
            "children": [{
              "label": "类别 2.1.1.1",
              "children": [{
                "label": "类别 2.1.1.1.1",
                "value": "口碑-本地生活事业部-东成西就大区-大中台-运营",
                "children": [{
                  "label": "类别 2.1.1.1.1.1",
                  "children": null,
                  "uv": 1,
                  "sum": 1,
                  "count": 0
                }, {
                  "label": "类别 2.1.1.1.1.2",
                  "children": null,
                  "uv": 1,
                  "sum": 1,
                  "count": 0
                }],
                "uv": 1,
                "sum": 3,
                "count": 0
              }],
              "uv": 1,
              "sum": 4,
              "count": 0
            }, {
              "label": "类别 2.1.1.2",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 5,
            "count": 0
          }, {
            "label": "类别 2.1.2",
            "children": [{
              "label": "类别 2.1.2.1",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }, {
              "label": "类别 2.1.2.2",
              "children": [{
                "label": "类别 2.1.2.2.1",
                "children": null,
                "uv": 1,
                "sum": 1,
                "count": 0
              }],
              "uv": 0,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 2,
            "count": 0
          }, {
            "label": "类别 2.1.3",
            "children": [{
              "label": "类别 2.1.3.1",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 1,
            "count": 0
          }, {
            "label": "类别 2.1.4",
            "children": [{
              "label": "类别 2.1.4.1",
              "children": null,
              "uv": 2,
              "sum": 2,
              "count": 0
            }],
            "uv": 0,
            "sum": 2,
            "count": 0
          }, {
            "label": "类别 2.1.5",
            "children": null,
            "uv": 1,
            "sum": 1,
            "count": 0
          }],
          "uv": 1,
          "sum": 12,
          "count": 0
        }, {
          "label": "类别 2.2",
          "children": [{
            "label": "类别 2.2.1",
            "children": null,
            "uv": 1,
            "sum": 1,
            "count": 0
          }],
          "uv": 1,
          "sum": 2,
          "count": 0
        }, {
          "label": "类别 2.3",
          "children": null,
          "uv": 1,
          "sum": 1,
          "count": 0
        }, {
          "label": "类别 2.4",
          "children": [{
            "label": "类别 2.4.1",
            "children": [{
              "label": "类别 2.4.1.1",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 1,
            "count": 0
          }],
          "uv": 0,
          "sum": 1,
          "count": 0
        }, {
          "label": "类别 2.5",
          "children": [{
            "label": "类别 2.5.1",
            "children": null,
            "uv": 3,
            "sum": 3,
            "count": 0
          }],
          "uv": 0,
          "sum": 3,
          "count": 0
        }],
        "uv": 1,
        "sum": 20,
        "count": 0
      }, {
        "label": "类别 3",
        "children": [{
          "label": "类别 3.1",
          "children": [{
            "label": "类别 3.1.1",
            "children": [{
              "label": "类别 3.1.1.1",
              "children": [{
                "label": "类别 3.1.1.1.1",
                "children": [{
                  "label": "类别 3.1.1.1.1.1",
                  "children": null,
                  "uv": 1,
                  "sum": 1,
                  "count": 0
                }],
                "uv": 0,
                "sum": 1,
                "count": 0
              }],
              "uv": 0,
              "sum": 1,
              "count": 0
            }, {
              "label": "类别 3.1.1.2",
              "children": [{
                "label": "类别 3.1.1.2.1",
                "children": [{
                  "label": "类别 3.1.1.2.1.1",
                  "children": null,
                  "uv": 2,
                  "sum": 2,
                  "count": 0
                }],
                "uv": 0,
                "sum": 2,
                "count": 0
              }],
              "uv": 1,
              "sum": 3,
              "count": 0
            }],
            "uv": 0,
            "sum": 4,
            "count": 0
          }, {
            "label": "类别 3.1.2",
            "children": [{
              "label": "类别 3.1.2.1",
              "children": null,
              "uv": 3,
              "sum": 3,
              "count": 0
            }, {
              "label": "类别 3.1.2.2",
              "children": [{
                "_id": "数据产品&运营",
                "label": "数据产品&运营",
                "value": "蚂蚁金服-平台数据技术事业群-数据平台部-数据资产平台-数据产品&运营",
                "children": null,
                "uv": 1,
                "sum": 1,
                "count": 0
              }],
              "uv": 0,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 4,
            "count": 0
          }],
          "uv": 0,
          "sum": 8,
          "count": 0
        }, {
          "label": "类别 3.2",
          "children": [{
            "label": "类别 3.2.1",
            "children": [{
              "label": "类别 3.2.1.1",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }, {
              "label": "类别 3.2.1.2",
              "children": [{
                "label": "类别 3.2.1.2.1",
                "children": null,
                "uv": 1,
                "sum": 1,
                "count": 0
              }, {
                "label": "类别 3.2.1.2.2",
                "children": [{
                  "_id": "城市民生运营",
                  "label": "城市民生运营",
                  "value": "蚂蚁金服-支付宝事业群-商家服务及开放平台事业部-公共服务部-运营部-城市民生运营",
                  "children": null,
                  "uv": 1,
                  "sum": 1,
                  "count": 0
                }],
                "uv": 0,
                "sum": 1,
                "count": 0
              }],
              "uv": 1,
              "sum": 3,
              "count": 0
            }],
            "uv": 0,
            "sum": 4,
            "count": 0
          }],
          "uv": 0,
          "sum": 4,
          "count": 0
        }, {
          "label": "类别 3.3",
          "children": [{
            "label": "类别 3.3.1",
            "children": [{
              "label": "类别 3.3.1.1",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 1,
            "count": 0
          }],
          "uv": 1,
          "sum": 2,
          "count": 0
        }, {
          "label": "类别 3.4",
          "children": [{
            "label": "类别 3.4.1",
            "children": [{
              "label": "类别 3.4.1.1",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }, {
              "label": "3.4.1.2",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 2,
            "count": 0
          }, {
            "label": "类别 3.4.2",
            "children": null,
            "uv": 1,
            "sum": 1,
            "count": 0
          }, {
            "label": "类别 3.4.3",
            "children": [{
              "label": "类别 3.4.3.1",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 1,
            "count": 0
          }],
          "uv": 0,
          "sum": 4,
          "count": 0
        }, {
          "label": "类别 3.5",
          "children": [{
            "label": "类别 3.5.1",
            "children": [{
              "label": "类别 3.5.1.1",
              "children": null,
              "uv": 2,
              "sum": 2,
              "count": 0
            }],
            "uv": 0,
            "sum": 2,
            "count": 0
          }, {
            "label": "类别 3.5.2",
            "children": [{
              "label": "类别 3.5.2.1",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 1,
            "count": 0
          }],
          "uv": 0,
          "sum": 3,
          "count": 0
        }, {
          "label": "类别 3.6",
          "children": [{
            "label": "类别 3.6.1",
            "children": [{
              "label": "类别 3.6.1.1",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }, {
              "label": "类别 3.6.1.2",
              "children": null,
              "uv": 1,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 2,
            "count": 0
          }],
          "uv": 1,
          "sum": 3,
          "count": 0
        }, {
          "label": "类别 3.7",
          "children": [{
            "label": "类别 3.7.1",
            "children": [{
              "label": "类别 3.7.1.1",
              "children": [{
                "label": "类别 3.7.1.1.1",
                "children": null,
                "uv": 1,
                "sum": 1,
                "count": 0
              }],
              "uv": 0,
              "sum": 1,
              "count": 0
            }],
            "uv": 0,
            "sum": 1,
            "count": 0
          }],
          "uv": 0,
          "sum": 1,
          "count": 0
        }],
        "uv": 0,
        "sum": 25,
        "count": 0
      }]
    }

    return (
      <Fragment>
        <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
          <div className={styles.salesCard}>
            <Tabs tabBarExtraContent={salesExtra} size="large" tabBarStyle={{ marginBottom: 24 }}>
              <TabPane tab="销售额" key="sales">
                <div className={styles.salesBar}>
                  {profitChartData &&
                  <HuBarAndLine height={295}
                       title="销售总额统计图"
                       data={profitChartData.grossEarningsChartData}
                       thisAverage = {thisMonthData.grossEarningsAverage}
                       lastAverage = {lastMonthData.grossEarningsAverage}
                       padding={[20, 48, 30, 48]}
                        scale = {{
                          x:{
                            type:'time',
                            mask:'MM-DD',
                            tickCount:15
                          }}}/>}
                  <div className={styles.grossEarningsContainer}>
                    <span>本月销售总额：￥{thisMonthData && thisMonthData.grossEarningsSum}</span>
                    <span>上月销售总额：￥{lastMonthData && lastMonthData.grossEarningsSum}</span>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="销卡量" key="views">
                <div className={styles.salesBar}>
                  {profitChartData &&
                  <HuBarAndLine height={292}
                       title="销卡额统计图"
                       data={profitChartData.destroySalesChartData}
                       thisAverage = {thisMonthData.destroySalesAverage}
                       lastAverage = {lastMonthData.destroySalesAverage}
                       padding={[20, 20, 30, 38]}
                       scale = {{
                         x:{
                           type:'time',
                           mask:'MM-DD',
                           tickCount:15
                         }
                       }}
                  />}
                  <div className={styles.grossEarningsContainer}>
                    <span>本月销卡总额：￥{thisMonthData && thisMonthData.destroySalesSum}</span>
                    <span>上月销卡总额：￥{lastMonthData && lastMonthData.destroySalesSum}</span>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </Card>

        <Row gutter={24}>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            {cardSalesData && <Card
              loading={loading}
              className={styles.salesCard}
              bordered={false}
              title="充值卡销售额占比"
              bodyStyle={{ padding: 24 }}
              style={{ marginTop: 24}}
            >
              <HuPie
                hasLegend
                subTitle="销售额"
                total={
                  () => <Yuan>{cardSalesData.reduce((pre, now) => now.y + pre, 0)}</Yuan>
                }
                data={cardSalesData}
                valueFormat={value => <Yuan>{value}</Yuan>}
                height={248}
                lineWidth={4}
              />
            </Card>}
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            {otherSalesData && <Card
              loading={loading}
              className={styles.salesCard}
              bordered={false}
              title="其他项目销售额占比"
              bodyStyle={{ padding: 24 }}
              style={{ marginTop: 24}}
            >
              <HuPie
                hasLegend
                subTitle="销售额"
                total={
                  () => <Yuan>{otherSalesData.reduce((pre, now) => now.y + pre, 0)}</Yuan>
                }
                data={otherSalesData}
                valueFormat={value => <Yuan>{value}</Yuan>}
                height={248}
                lineWidth={4}
                colors={[ '#ffa940', '#f04864', '#ffec3d']}
              />
            </Card>}
          </Col>
        </Row>

        {realIncomeData && <Card
          title="实际收入趋势图"
          loading={profitLoading}
          bordered={false}
          bodyStyle = {{ padding: '5px 0 32px 24px'}}
          style={{marginTop: 32}}
        >
          <HuSingleLine
            title=""
            height={400}
            data={realIncomeData}
            titleMap = {{y: '实际销售额'}}
            thisAverage = {thisMonthData.grossEarningsAverage}
            lastAverage = {lastMonthData.grossEarningsAverage}
          />
        </Card>}
        <Row gutter={24}>
          <Col  xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card
              title="收入分布统计图"
              bordered={false}
              bodyStyle = {{ padding: '0'}}
              style={{marginTop: 32}}>
              {IncomeSunData && <HuSunburst
                data={IncomeSunData}
                height={400}
                color={['value', '#d9f7be-#52c41a-#237804']}
                onPlotDblClick = {this.dbClick}
              />}
            </Card>
          </Col>
          <Col  xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card
              title="支出分布统计图"
              bordered={false}
              bodyStyle = {{ padding: '0'}}
              style={{marginTop: 32}}>
              <HuSunburst
                data={HuSunburstData}
                height={400}
                color={['value','#ffccc7-#f5222d-#a8071a']}
              />
            </Card>
          </Col>
        </Row>

      </Fragment>
    );
  }
}
