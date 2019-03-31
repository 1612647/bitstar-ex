//Import library
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

//Import Component
import NavBarComponent from '../common/navbar-component';
import ExchangeComponent from '../trade/exchange-component/exchange-component';
import MarginComponent from '../trade/margin-component/margin-component';
import HomeComponent from '../home-component/home-component';
import NewsComponent from '../news-component/news-component';
import LoginComponent from '../auth/login-component/login-component';
import RegisterComponent from '../auth/register-component/register-component';
import SupportComponent from '../support-component/support-component';

//Import scss
import './main-component.scss';

const {
    Header, Content, Footer, Sider,
} = Layout;

class MainComponent extends Component {
    constructor(props){
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
                        <div className="logo" />
                        <Menu className="side-menu" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span className="nav-text">nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span className="nav-text">nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span className="nav-text">nav 3</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="user" />
                                <span className="nav-text">nav 4</span>
                            </Menu.Item>
                        </Menu>
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
                                <Route path="/login" component={LoginComponent}></Route>
                                <Route path="/register" component={RegisterComponent}></Route>
                                <Route path="/support" component={SupportComponent}></Route>
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