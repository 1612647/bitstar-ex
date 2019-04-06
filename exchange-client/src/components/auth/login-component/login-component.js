//Import react library
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import custome scss
import './login-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design
import { Form, Icon, Input, Button, Checkbox } from 'antd';


class LoginComponent extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{
                            required: true,
                            message: <FormattedMessage id="app.register.validate.email.required" />
                        }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Your email" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: <FormattedMessage id="app.register.validate.password.required" />
                        }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Your password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>
                            <FormattedMessage id="app.login.remmeber_me" />
                        </Checkbox>
                    )}
                    <NavLink className="login-form-forgot" to={'/forgot-password'}>
                        <FormattedMessage id="app.login.forgot_pw" />
                    </NavLink>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        <FormattedMessage id="app.login.login" />
                    </Button>
                    <FormattedMessage id="app.login.or" />&nbsp;
                    <NavLink to={'/register'}>
                        <FormattedMessage id="app.login.register_now" />
                    </NavLink>
                </Form.Item>
            </Form>
        )
    };
}
export default Form.create({ name: 'normal_login' })(LoginComponent);