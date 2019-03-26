//Import library
import React from 'react';
import { Menu, Icon, Select, Typography } from 'antd';
import 'antd/dist/antd.css';

//Import custome scss
import './navbar-component.scss';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const Option = Select.Option;
const { Title } = Typography;

class NavBarComponent extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="l-1" className="item show-sm">
          <Title level={4}>BitStar</Title>

        </Menu.Item>
        <SubMenu key="l-2" className="item"
          title={<span className="submenu-title-wrapper"><Icon type="bank" />Exchange</span>}>
          <Menu.Item key="setting:3">Basic</Menu.Item>
          <Menu.Item key="setting:4">Advance</Menu.Item>
        </SubMenu>
        <Menu.Item key="l-3" className="item">
          <a href="/" target="_blank" rel="noopener noreferrer">OTC</a>
        </Menu.Item>

        <Menu.Item key="r-1" className="item right">
          <Select defaultValue="Language" style={{ width: 120 }} onChange={() => { }}>
            <Option value="en">English</Option>
            <Option value="vi">Tiếng Việt</Option>
          </Select>
        </Menu.Item>
        <Menu.Item key="r-2" className="item right show-sm">
          <a href="/" target="_blank" >Login</a>
        </Menu.Item>
        <span className="item right">or</span>
        <Menu.Item key="r-3" className="item right show-sm">
          <a href="/" target="_blank">Sign up</a>
        </Menu.Item>
        <Menu.Item key="r-4" className="item right">
          <a href="/" target="_blank">News</a>
        </Menu.Item>
        <Menu.Item key="r-5" className="item right">
          <a href="/" target="_blank">Support</a>
        </Menu.Item>
        <Menu.Item key="r-6" className="item right">
          <a href="/" target="_blank">Join us</a>
        </Menu.Item>

      </Menu>
    );
  }
}

export default NavBarComponent;