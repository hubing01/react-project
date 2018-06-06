import React, { PureComponent } from 'react';
import {
  Card,
  Col,
  Button,
  Form,
  Icon,
  InputNumber,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
} from 'antd';
import { connect } from 'dva';
import FooterToolbar from 'components/FooterToolbar';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import TableForm from './../Forms/TableForm';
import styles from './entering.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const fieldLabels = {
  sale_300 : '300元卡销售量',
  sale_600 : '600元卡销售量',
  sale_1000 : '1000元卡销售量',
  toySales : '玩具销售额',
  trainsetSales : '小火车销售额',
  ceramicsSales : '陶艺销售额',
  throughTicketSales : '通票销售额',
  singleSales : '单次销售额',
  destroySales : '会员销卡额'
};

const tableData = [
  {
    key: '1',
    workId: '00001',
    name: 'John Brown',
    department: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    workId: '00002',
    name: 'Jim Green',
    department: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    workId: '00003',
    name: 'Joe Black',
    department: 'Sidney No. 1 Lake Park',
  },
];

class AdvancedForm extends PureComponent {
  state = {
    width: '100%',
  };
  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }
  resizeFooterToolbar = () => {
    const sider = document.querySelectorAll('.ant-layout-sider')[0];
    const width = `calc(100% - ${sider.style.width})`;
    if (this.state.width !== width) {
      this.setState({ width });
    }
  };
  render() {
    const { form, dispatch, submitting } = this.props;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const validate = () => {
      validateFieldsAndScroll((error, values) => {
        if (!error) {
          // submit the values
          dispatch({
            type: 'form/submitAdvancedForm',
            payload: values,
          });
        }
      });
    };
    const errors = getFieldsError();
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length;
      if (!errors || errorCount === 0) {
        return null;
      }
      const scrollToField = fieldKey => {
        const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
        if (labelNode) {
          labelNode.scrollIntoView(true);
        }
      };
      const errorList = Object.keys(errors).map(key => {
        if (!errors[key]) {
          return null;
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        );
      });
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="表单校验信息"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      );
    };
    return (
      <PageHeaderLayout
        title="高级表单"
        content="高级表单常见于一次性输入和提交大批量数据的场景。"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="当日收益" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={24}>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.sale_300}>
                  <Input.Group compact>
                    {getFieldDecorator('sale_300', {
                      initialValue: '',
                      rules: [{ required: true, message: '请输入销售张数' }],
                    })(
                      <InputNumber min={0} precision={0} style={{width:'calc(100% - 60px)'}}/>)}
                    <Input value='张'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.sale_600}>
                  <Input.Group compact>
                    {getFieldDecorator('sale_600', {
                      initialValue: '',
                      rules: [{ required: true, message: '请输入销售张数' }],
                    })(
                      <InputNumber min={0} precision={0} style={{width:'calc(100% - 60px)'}}/>)}
                    <Input value='张'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.sale_1000}>
                  <Input.Group compact>
                    {getFieldDecorator('sale_1000', {
                      initialValue: '',
                      rules: [{ required: true, message: '请输入销售张数' }],
                    })(
                      <InputNumber min={0} precision={0} style={{width:'calc(100% - 60px)'}}/>)}
                    <Input value='张'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.toySales}>
                  <Input.Group compact>
                    {getFieldDecorator('toySales', {
                      initialValue: '',
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.trainsetSales}>
                  <Input.Group compact>
                    {getFieldDecorator('trainsetSales', {
                      initialValue: '',
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.ceramicsSales}>
                  <Input.Group compact>
                    {getFieldDecorator('ceramicsSales', {
                      initialValue: '',
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.destroySales}>
                  <Input.Group compact>
                    {getFieldDecorator('destroySales', {
                      initialValue: '',
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.singleSales}>
                  <Input.Group compact>
                    {getFieldDecorator('singleSales', {
                      initialValue: '',
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.throughTicketSales}>
                  <Input.Group compact>
                    {getFieldDecorator('throughTicketSales', {
                      initialValue: '',
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <FooterToolbar style={{ width: this.state.width }}>
          {getErrorInfo()}
          <Button type="primary" onClick={validate} loading={submitting}>
            提交
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    );
  }
}

export default connect(({ global, loading }) => ({
  collapsed: global.collapsed,
  submitting: loading.effects['form/submitAdvancedForm'],
}))(Form.create()(AdvancedForm));
