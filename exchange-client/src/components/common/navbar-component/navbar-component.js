//Import react library
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import custome scss
import './navbar-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import Redux
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

//Inport ant design 
import { Menu, Icon, Select, Typography } from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const Option = Select.Option;
const { Title } = Typography;

class NavBarComponent extends React.Component {
  state = {
    current: 'mail',
  }

  onChangeLanguage = (lang) => {
    this.props.onChangeLang(lang)
  }

  handleClick = (e) => {
    // console.log('click ', e);
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
          <Title level={4}>
            <NavLink to={'/home'}>BitStar</NavLink>
          </Title>
        </Menu.Item>
        <SubMenu key="l-2" className="item"
          title={<span className="submenu-title-wrapper"><Icon type="bank" />
            <FormattedMessage id="menu.exchange" />
          </span>}>
          <Menu.Item key="setting:3">
            <NavLink to={'/exchange'}>
              <FormattedMessage id="menu.basic" />
            </NavLink>
          </Menu.Item>
          <Menu.Item key="setting:4">
            <NavLink to={'/exchange'}>
              <FormattedMessage id="menu.advance" />
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="l-3" className="item">
          <NavLink to={'/margin'}>
            <FormattedMessage id="menu.margin" />
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="l-3" className="item">
          <a href="/" target="_blank" rel="noopener noreferrer">OTC</a>
        </Menu.Item> */}

        <Menu.Item key="r-1" className="item right">
          <Select defaultValue={this.props.lang.locale} style={{ width: 120 }} onChange={ this.onChangeLanguage }>
            <Option value="en">English</Option>
            <Option value="vi">Tiếng Việt</Option>
          </Select>
        </Menu.Item>
        <Menu.Item key="r-2" className="item right show-sm">
          <NavLink to={'/login'}>
            <FormattedMessage id="menu.login" />
          </NavLink>
        </Menu.Item>

        <Menu.Item key="r-3" className="item right only-text">
            <FormattedMessage id="menu.or" />
        </Menu.Item>

        <Menu.Item key="r-4" className="item right show-sm">
          <NavLink to={'/register'}>
            <FormattedMessage id="menu.register" />
          </NavLink>
        </Menu.Item>
        <Menu.Item key="r-5" className="item right">
          <NavLink to={'/news'}>
            <FormattedMessage id="menu.news" />
          </NavLink>
        </Menu.Item>
        <Menu.Item key="r-6" className="item right">
          <NavLink to={'/support'}>
            <FormattedMessage id="menu.support" />
          </NavLink>
        </Menu.Item>

      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeLang: (lang) => {
      dispatch(actions.changeLang(lang));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);