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
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
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
  destroySales : '会员销卡额',
  grossEarnings : '总收益',
  user : '录入人'
};
const TYPE = {
  CREAT : 'CREAT',
  UPDATE : 'UPDATE'
}

class AdvancedForm extends PureComponent {
  state = {
    width: '100%',
    type : TYPE.CREAT,
    id : undefined,
    isDisabled : false,
    initialFormValue : {
      sale_300:'',
      sale_600 : '',
      sale_1000 : '',
      toySales : '',
      trainsetSales : '',
      ceramicsSales : '',
      throughTicketSales : '',
      singleSales : '',
      destroySales : '',
      grossEarnings : '',
      user : ''
    }
  };
  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar);
    this.handleInitial(this.props.location);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.location.pathname != this.props.location.pathname) {
      let query = nextProps.location.query;
      this.handleInitial(nextProps.location);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }
  handleInitial(location){
    const {pathname, query} = location;
    let id = '', type = TYPE.CREAT, isDisabled = false,
      initialFormValue = {
        sale_300: '',
        sale_600 : '',
        sale_1000 : '',
        toySales : '',
        trainsetSales : '',
        ceramicsSales : '',
        throughTicketSales : '',
        singleSales : '',
        destroySales : '',
        grossEarnings : '',
        user : ''
      }
    if(pathname.split('/')[3]){
      id = pathname.split('/')[3];
      type = TYPE.UPDATE;
      isDisabled = true,
      initialFormValue = {
        sale_300: query.sale_300,
        sale_600 : query.sale_600,
        sale_1000 : query.sale_1000,
        toySales : query.toySales,
        trainsetSales : query.trainsetSales,
        ceramicsSales : query.ceramicsSales,
        throughTicketSales : query.throughTicketSales,
        singleSales : query.singleSales,
        destroySales : query.destroySales,
        grossEarnings : query.grossEarnings,
        user : query.user
      }
    }else{
    }
    this.setState({
      type : type,
      id : id,
      isDisabled : isDisabled,
      initialFormValue : initialFormValue
    })

  }
  resizeFooterToolbar = () => {
    const sider = document.querySelectorAll('.ant-layout-sider')[0];
    const width = `calc(100% - ${sider.style.width})`;
    if (this.state.width !== width) {
      this.setState({ width });
    }
  };
  getParamentsFromHistory = () => {
    let query;
    let localStorageData = localStorage.getItem("enteringDetials");
    if(this.props.location.query){
      query = this.props.location.query;
    }else if(localStorageData){
      query = JSON.parse(localStorageData);
    }
    localStorage.setItem( "enteringDetials",JSON.stringify(query));
    return query;
  }

  handleChangeClick = () =>{
    const { form } = this.props;
    let isDisabled = this.state.isDisabled;
    let formName = ['sale_300', 'sale_600', 'sale_1000', 'toySales', 'trainsetSales',
      'ceramicsSales', 'throughTicketSales', 'singleSales', 'destroySales', 'grossEarnings',
      'user'];
    if(!isDisabled){
      form.resetFields(formName);
    }
    this.setState({
      isDisabled : !isDisabled
    })
  }
  render() {
    let {isDisabled, initialFormValue} = this.state;
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
                      initialValue: initialFormValue.sale_300,
                      rules: [{ required: true, message: '请输入销售张数' }],
                    })(
                      <InputNumber min={0} precision={0} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
                      <Input value='张'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.sale_600}>
                  <Input.Group compact>
                    {getFieldDecorator('sale_600', {
                      initialValue: initialFormValue.sale_600,
                      rules: [{ required: true, message: '请输入销售张数' }],
                    })(
                      <InputNumber min={0} precision={0} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
                    <Input value='张'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.sale_1000}>
                  <Input.Group compact>
                    {getFieldDecorator('sale_1000', {
                      initialValue: initialFormValue.sale_1000,
                      rules: [{ required: true, message: '请输入销售张数' }],
                    })(
                      <InputNumber min={0} precision={0} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
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
                      initialValue: initialFormValue.toySales,
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.trainsetSales}>
                  <Input.Group compact>
                    {getFieldDecorator('trainsetSales', {
                      initialValue: initialFormValue.trainsetSales,
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.ceramicsSales}>
                  <Input.Group compact>
                    {getFieldDecorator('ceramicsSales', {
                      initialValue: initialFormValue.ceramicsSales,
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
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
                      initialValue: initialFormValue.destroySales,
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.singleSales}>
                  <Input.Group compact>
                    {getFieldDecorator('singleSales', {
                      initialValue: initialFormValue.singleSales,
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.throughTicketSales}>
                  <Input.Group compact>
                    {getFieldDecorator('throughTicketSales', {
                      initialValue: initialFormValue.throughTicketSales,
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.grossEarnings}>
                  <Input.Group compact>
                    {getFieldDecorator('grossEarnings', {
                      initialValue: initialFormValue.grossEarnings,
                      rules: [{ required: true, message: '请输入销售金额' }],
                    })(
                      <InputNumber min={0} precision={2} style={{width:'calc(100% - 60px)'}} disabled={isDisabled}/>)}
                    <Input value='元'
                           style={{ width: 60 ,'textAlign':'center'}} disabled/>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col lg={8} md={8} sm={24}>
                <Form.Item label={fieldLabels.user}>
                    {getFieldDecorator('user', {
                      initialValue: initialFormValue.user,
                      rules: [{ required: true, message: '请输入录入人' }],
                    })(<Select disabled={isDisabled}>
                      <Option value='陈三日'>陈三日</Option>
                      <Option value='张三日'>张三日</Option>
                    </Select>)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <FooterToolbar style={{ width: this.state.width }}>
          {getErrorInfo()}
          {this.state.type == TYPE.UPDATE && <Button onClick={this.handleChangeClick} loading={submitting}>
            {this.state.isDisabled ? '修改' : '取消'}
          </Button>}
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
