//Import library
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';

//Import Component
import NavBarComponent from '../common-components/navbar-component';
import HomeComponent from '../home-component/home-component'

//Import scss
import './main-component.scss';

const {
    Header, Content, Footer, Sider,
} = Layout;

class MainComponent extends Component {
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
                        <Menu class="side-menu" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
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
                                <Route path="/" component={HomeComponent}></Route>
                            </div>
                        </Content>
                        <Footer>
                            BitStar Exchange ©2019 Created by Tiểu hổ xào măng
                        </Footer>
                    </Layout>

                </Layout>

            </Router>

        );
    }
}

export default MainComponent;