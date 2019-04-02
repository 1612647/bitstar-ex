//Import library
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import Component
import HomeComponent from '../home-component/home-component';
import NavBarComponent from '../common/navbar-component/navbar-component';
import SideBarComponent from '../common/sidebar-component/sidebar-component';

//Import router config
import routes from '../../router';

//Import scss
import './main-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design 
import { Layout } from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    showContent = (routes => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component} />
                )
            })
        }
        return result;
    })

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
                            <Switch>
                                <Route path="/" exact component={HomeComponent}></Route>
                                {this.showContent(routes)}
                            </Switch>
                        </Content>
                        <Footer>
                            <FormattedMessage id="footer.brand" /> ©2019 &nbsp;
                            <FormattedMessage id="footer.createby" /> thi174hcmus &nbsp;
                        </Footer>
                    </Layout>

                </Layout>

            </Router>

        );
    }
}

export default MainComponent;