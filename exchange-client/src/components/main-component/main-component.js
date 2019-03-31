//Import library
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

//Import Component
import NavBarComponent from '../common/navbar-component/navbar-component';
import SideBarComponent from '../common/sidebar-component/sidebar-component';
import ExchangeComponent from '../trade/exchange-component/exchange-component';
import MarginComponent from '../trade/margin-component/margin-component';
import HomeComponent from '../home-component/home-component';
import NewsComponent from '../news-component/news-component';
import LoginComponent from '../auth/login-component/login-component';
import RegisterComponent from '../auth/register-component/register-component';
import ForgotPasswordComponent from '../auth/forgot-password-component/forgot-password-component';
import SupportComponent from '../support-component/support-component';

//Import scss
import './main-component.scss';

const {
    Header, Content, Footer, Sider,
} = Layout;

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Sider className="side-bar"
                        breakpoint="md"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => { console.log(broken); }}
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                        <SideBarComponent />
                    </Sider>
                    <Layout id="main">
                        <Header>
                            <NavBarComponent />
                        </Header>
                        <Content>
                            <div>
                                <Route path="/home" component={HomeComponent}></Route>
                                <Route path="/exchange" component={ExchangeComponent}></Route>
                                <Route path="/margin" component={MarginComponent}></Route>
                                <Route path="/news" exact component={NewsComponent}></Route>
                                <Route path="/support" component={SupportComponent}></Route>
                                <Route path="/login" component={LoginComponent}></Route>
                                <Route path="/register" component={RegisterComponent}></Route>
                                <Route path="/forgot-password" component={ForgotPasswordComponent}></Route>
                            </div>
                        </Content>
                        <Footer>
                            BitStar Exchange ©2019 Created by thi174hcmus
                        </Footer>
                    </Layout>

                </Layout>

            </Router>

        );
    }
}

export default MainComponent;