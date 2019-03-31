//Import react library
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import custome scss
import './forgot-password-component.scss';

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
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="forgot-pw-form-button">
                        Send
                    </Button>
                    <NavLink className="login-form-forgot" to={'/login'}>Login</NavLink>
                    <span className="register-form-forgot">Or <NavLink to={'/register'}>Register</NavLink></span>
                </Form.Item>
            </Form>
        )
    };
}
export default Form.create({ name: 'normal_forgot_password' })(ForgotPasswordComponent);