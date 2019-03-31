//Import react library
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import ant-design
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';

//Import custome scss
import './sidebar-component.scss';

class SideBarComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="logo" />
        <Menu className="side-menu" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="0">
            <NavLink to={'/home'}>
              <Icon type="home" />
              <span className="nav-text">Home</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink to={'/home'}>
              <Icon type="user" />
              <span className="nav-text">Account</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to={'/home'}>
              <Icon type="bank" />
              <span className="nav-text">Balance</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to={'/exchange'}>
              <Icon type="user" />
              <span className="property-safety">Exchange</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to={'/margin'}>
              <Icon type="money-collect" />
              <span className="nav-text">Margin</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="5">
            <NavLink to={'/support'}>
              <Icon type="question-circle" />
              <span className="nav-text">Support</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="6">
            <NavLink to={'/news'}>
              <Icon type="read" />
              <span className="nav-text">News</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="7">
            <NavLink to={'/login'}>
              <Icon type="login" />
              <span className="nav-text">Login</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="8">
            <NavLink to={'/register'}>
              <Icon type="video-camera" />
              <span className="nav-text">Register</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="9">
            <NavLink to={'/home'}>
              <Icon type="logout" />
              <span className="nav-text">Sign out</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SideBarComponent;