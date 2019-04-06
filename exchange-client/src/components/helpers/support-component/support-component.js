//Import react library
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import components
import ContentHeaderComponent from '../content-header-component/content-header-component';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import custome scss
import './support-component.scss';

//Import ant-design
import {
    Row, Col, Button, Form, Select, Input, Upload, Icon
} from 'antd';

const { Option } = Select;
const { TextArea } = Input;

class SupportComponent extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return (
            <div id="support-component">
                <ContentHeaderComponent></ContentHeaderComponent>
                <div className="btn-group">
                    <Row>
                        <Col span={12}>
                            <NavLink to={'/announcements'}>
                                <Button type="ghost" size='large' block>
                                    <FormattedMessage id="app.support.announcements" />
                                </Button>
                            </NavLink>
                        </Col>
                        <Col span={12}>
                            <NavLink to={'/faq'}>
                                <Button type="ghost" size='large' block>
                                    <FormattedMessage id="app.support.faq" />
                                </Button>
                            </NavLink>
                        </Col>
                    </Row>
                </div>
                <div className="form-request">
                    <h1 className="title">
                        <FormattedMessage id="app.support.submit_a_request" />
                    </h1>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label={<FormattedMessage id="app.support.form.email" />}>
                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true,
                                    message: <FormattedMessage id="app.support.form.validate.email" />
                                }],
                            })(
                                <Input placeholder="Please input your email" />
                            )}
                        </Form.Item>
                        <Form.Item label={<FormattedMessage id="app.support.form.issue" />} hasFeedback>
                            {getFieldDecorator('select', {
                                rules: [{
                                    required: true,
                                    message: <FormattedMessage id="app.support.form.validate.issue" />
                                }],
                            })(
                                <Select placeholder="Please select the type of issue ">
                                    <Option value="registration">Account registration</Option>
                                    <Option value="access">Account access</Option>
                                    <Option value="trading">Trading</Option>
                                    <Option value="deposit">Deposit</Option>
                                    <Option value="withdraw">Withdraw</Option>
                                    <Option value="mining">Mining</Option>
                                    <Option value="safety">Safety & 2FA</Option>
                                    <Option value="kyc">KYC</Option>
                                    <Option value="complaints">Complaints & Suggestions</Option>
                                    <Option value="others">Others</Option>
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item label={<FormattedMessage id="app.support.form.subject" />}>
                            {getFieldDecorator('subject', {
                                rules: [{
                                    required: true,
                                    message: <FormattedMessage id="app.support.form.validate.subject" />,
                                }],
                            })(
                                <Input placeholder="Enter Subject" />
                            )}
                        </Form.Item>

                        <Form.Item label={<FormattedMessage id="app.support.form.description" />}>
                            {getFieldDecorator('description', {
                                rules: [{
                                    required: true,
                                    message: <FormattedMessage id="app.support.form.validate.description" />,
                                }],
                            })(
                                <TextArea rows={4} />
                            )}
                        </Form.Item>

                        <Form.Item label={<FormattedMessage id="app.support.form.attachments" />} extra="" >
                            {getFieldDecorator('upload', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                            })(
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button>
                                        <Icon type="upload" />
                                        <FormattedMessage id="app.support.form.upload" />
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 12, offset: 6 }} >
                            <Button type="primary" htmlType="submit">
                                <FormattedMessage id="app.support.form.submit" />
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Form.create({ name: "support-form" })(SupportComponent);