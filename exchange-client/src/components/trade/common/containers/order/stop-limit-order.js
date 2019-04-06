//Import react library
import React from 'react';

//Import custome scss
import './order-common.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design
import { Row, Col, Card, Form, InputNumber, Button, Slider } from 'antd';

class StopLimitOrder extends React.Component {
    state = {
        checkNick: false,
        loadingBuy: false,
        iconLoadingBuy: false,
        loadingSell: false,
        iconLoadingSell: false,
    };
    check = () => {
        this.props.form.validateFields(
            (err) => {
                if (!err) {
                    console.info('success');
                }
            },
        );
    }
    handleChange = (e) => {
        this.setState({
            checkNick: e.target.checked,
        }, () => {
            this.props.form.validateFields(['nickname'], { force: true });
        });
    }
    enterLoading = () => {
        this.setState({ loading: true });
    }
    render() {
        // const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const formTailLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16, offset: 8 },
        };

        const marks = {
            0: '0%',
            25: '25%',
            50: '50%',
            75: '75%',
            100: {
                style: {
                    color: '#f50',
                },
                label: <strong>100%</strong>,
            },
        };
        return (
            <div id="stop-limit-order">
                <Row>
                    <Col span={12}>
                        <Card bordered={false} >
                            <h3>
                                <FormattedMessage id="app.trade.info.transaction.buy" />&nbsp;
                                ETH
                            </h3>
                            <Form.Item {...formItemLayout} l
                                label={<FormattedMessage id="app.trade.info.transaction.balance" />}
                                style={{ textAlign: "right" }}>
                                10000 USDT
                            </Form.Item>
                            <Form.Item {...formItemLayout}
                                label={<FormattedMessage id="app.trade.info.transaction.stop_price" />}>
                                {/* {getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input your name',
                                    }],
                                })( */}
                                <InputNumber size="small" min={0} max={100000} step={0.1} defaultValue={3} />
                                {/* )} */}
                            </Form.Item>

                            <Form.Item {...formItemLayout}
                                label={<FormattedMessage id="app.trade.info.transaction.limit_price" />}>
                                {/* {getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input your name',
                                    }],
                                })( */}
                                <InputNumber size="small" min={0} max={100000} step={0.1} defaultValue={3} />
                                {/* )} */}
                            </Form.Item>
                            <Form.Item {...formItemLayout}
                                label={<FormattedMessage id="app.trade.info.transaction.amount" />}>
                                {/* {getFieldDecorator('nickname', {
                                    rules: [{
                                        required: this.state.checkNick,
                                        message: 'Please input your nickname',
                                    }],
                                })( */}
                                <InputNumber size="small" min={0} max={100000} step={0.1} allowClear defaultValue={3} />
                                {/* )} */}
                            </Form.Item>
                            <Slider marks={marks} step={5} defaultValue={0} style={{ marginTop: '50px' }} />
                            <Form.Item {...formItemLayout}
                                label={<FormattedMessage id="app.trade.info.transaction.total" />}
                                style={{ textAlign: "right" }}>
                                0 USDT
                            </Form.Item>
                            <Form.Item {...formTailLayout}>
                                <Button className="btn-buy" block loading={this.state.loadingBuy} onClick={this.enterLoadingBuy}>
                                    <FormattedMessage id="app.trade.info.transaction.buy" />
                                </Button>
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false} >
                            <h3>
                                <FormattedMessage id="app.trade.info.transaction.sell" />&nbsp;
                                ETH
                             </h3>
                            <Form.Item {...formItemLayout}
                                label={<FormattedMessage id="app.trade.info.transaction.balance" />}
                                style={{ textAlign: "right" }}>
                                10000 ETH
                            </Form.Item>
                            <Form.Item {...formItemLayout}
                                label={<FormattedMessage id="app.trade.info.transaction.stop_price" />}>
                                {/* {getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input your name',
                                    }],
                                })( */}
                                <InputNumber size="small" min={0} max={100000} step={0.1} allowClear defaultValue={3} />
                                {/* )} */}
                            </Form.Item>

                            <Form.Item {...formItemLayout}
                                label={<FormattedMessage id="app.trade.info.transaction.limit_price" />}>
                                {/* {getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input your name',
                                    }],
                                })( */}
                                <InputNumber size="small" min={0} max={100000} step={0.1} defaultValue={3} />
                                {/* )} */}
                            </Form.Item>
                            <Form.Item {...formItemLayout}
                                label={<FormattedMessage id="app.trade.info.transaction.amount" />}>
                                {/* {getFieldDecorator('nickname', {
                                    rules: [{
                                        required: this.state.checkNick,
                                        message: 'Please input your nickname',
                                    }],
                                })( */}
                                <InputNumber size="small" min={0} max={100000} step={0.1} allowClear defaultValue={3} />
                                {/* )} */}
                            </Form.Item>
                            <Slider marks={marks} step={5} defaultValue={0} style={{ marginTop: '50px' }} />
                            <Form.Item {...formItemLayout}
                                label={<FormattedMessage id="app.trade.info.transaction.total" />}
                                style={{ textAlign: "right" }}>
                                0 ETH
                            </Form.Item>
                            <Form.Item {...formTailLayout}>
                                <Button className="btn-sell" block loading={this.state.loadingSell} onClick={this.enterLoadingSell}>
                                    <FormattedMessage id="app.trade.info.transaction.sell" />
                                </Button>
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    };
}
export default StopLimitOrder;