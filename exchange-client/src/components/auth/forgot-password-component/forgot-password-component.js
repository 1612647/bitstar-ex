//Import react library
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import custome scss
import './forgot-password-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design
import { Form, Icon, Input, Button } from 'antd';


class ForgotPasswordComponent extends React.Component {
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
            <Form onSubmit={this.handleSubmit} className="forgot-password-form">
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{
                            required: true,
                            message: <FormattedMessage id="app.forgot_pw.validate.email.required" />
                        }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="forgot-pw-form-button">
                        <FormattedMessage id="app.forgot_pw.send" />
                    </Button>
                    <NavLink className="login-form-forgot" to={'/login'}>
                        <FormattedMessage id="app.forgot_pw.login" />
                    </NavLink>
                    <span className="register-form-forgot">
                        <FormattedMessage id="app.forgot_pw.or" />
                        <NavLink to={'/register'}>
                            <FormattedMessage id="app.forgot_pw.register" />
                        </NavLink></span>
                </Form.Item>
            </Form>
        )
    };
}
export default Form.create({ name: 'normal_forgot_password' })(ForgotPasswordComponent);