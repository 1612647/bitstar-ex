//Import react library
import React from 'react';

//Import custome scss
import './register-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//import ant-design
import {
    Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Typography
} from 'antd';


const { Text } = Typography;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegisterComponent extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '84',
        })(
            <Select style={{ width: 70 }}>
                <Option value="1">+1</Option>
                <Option value="84">+84</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register-form">
                <Form.Item label={(
                    <span>
                        <FormattedMessage id="app.register.email" />
                    </span>
                )}>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: <FormattedMessage id="app.register.validate.email.email" />,
                        }, {
                            required: true,
                            message: <FormattedMessage id="app.register.validate.email.required" />,
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label={(
                    <span>
                        <FormattedMessage id="app.register.password" />
                    </span>
                )}>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: <FormattedMessage id="app.register.validate.password.required" />,
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </Form.Item>
                <Form.Item label={(
                    <span>
                        <FormattedMessage id="app.register.confirm_password" />
                    </span>
                )}>
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true,
                            message: <FormattedMessage id="app.register.validate.confirm_password.required" />,
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </Form.Item>
                <Form.Item label={(
                    <span>
                        <FormattedMessage id="app.register.fullname" />&nbsp;
                            <Tooltip title="Need to verify your account">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                )}>
                    {getFieldDecorator('fullname', {
                        rules: [{
                            required: true,
                            message: <FormattedMessage id="app.register.validate.fullname.required" />,
                            whitespace: true
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label={(
                    <span>
                        <FormattedMessage id="app.register.phone" />
                    </span>
                )}>
                    {getFieldDecorator('phone', {
                        rules: [{
                            required: true,
                            message: <FormattedMessage id="app.register.validate.phone.required" />
                        }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    )}
                </Form.Item>
                <Form.Item label={(
                    <span>
                        <FormattedMessage id="app.register.captcha" />
                    </span>
                )} extra={(
                    <span>
                        <FormattedMessage id="app.register.capcha_message" />
                    </span>
                )}>
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [{
                                    required: true,
                                    message: <FormattedMessage id="app.register.validate.captcha.required" />
                                }],
                            })(
                                <Input />
                            )}
                        </Col>
                        <Col span={12}>
                            <Button>
                                <FormattedMessage id="app.register.get_captcha" />
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label={(
                    <span>
                        <FormattedMessage id="app.register.referral_id" />&nbsp;
                        (<FormattedMessage id="app.register.optional" />)&nbsp;
                            <Tooltip title="">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                )}>
                    {getFieldDecorator('referralId', {

                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>
                            <FormattedMessage id="app.register.agreement.pre" />
                            <Text type="secondary">
                                <FormattedMessage id="app.register.agreement" />
                            </Text>
                        </Checkbox>
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        <FormattedMessage id="app.register.register" />
                    </Button>
                </Form.Item>
            </Form>
        )
    };
}
export default Form.create({ name: 'register' })(RegisterComponent);