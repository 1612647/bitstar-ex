//Import react library
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import custome scss
import './footer-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons';


//Import ant-design 
import { Row, Col, List } from 'antd';


const menus = [
    {
        intlTitle: 'app.footer.support',
        menu: [{
            intlTitle: 'app.footer.support.faq',
            path: '/faq'
        },
        {
            intlTitle: 'app.footer.support.tutorials',
            path: '/support'
        },
        {
            intlTitle: 'app.footer.support.announcements',
            path: '/announcements'
        },
        {
            intlTitle: 'app.footer.support.contact_form',
            path: '/support'
        },
        {
            intlTitle: 'app.footer.support.api',
            path: '/support'
        }]
    },
    {
        intlTitle: 'app.footer.conditions',
        menu: [{
            intlTitle: 'app.footer.conditions.user-agreement',
            path: '/news'
        },
        {
            intlTitle: 'app.footer.conditions.privacy_policy',
            path: '/news'
        },
        {
            intlTitle: 'app.footer.conditions.fees',
            path: '/news'
        }]
    },
    {
        intlTitle: 'app.footer.about_us',
        menu: [{
            intlTitle: 'app.footer.about_us.about_bistar',
            path: '/news'
        },
        {
            intlTitle: 'app.footer.about_us.crypto_intro',
            path: '/news'
        },
        {
            intlTitle: 'app.footer.about_us.listing_app',
            path: '/news'
        },
        {
            intlTitle: 'app.footer.about_us.change_log',
            path: '/news'
        }]
    },
    {
        intlTitle: 'app.footer.contact_us',
        menu: [{
            intlTitle: 'app.footer.contact_us.info',
            path: '/'
        }]
    },
];

class FooterComponent extends React.Component {
    render() {
        return (
            <div id="footer-component">
                <div className="menu">
                    <Row>
                        <Col span={8} className="brand">
                            <NavLink to={'/'}>
                                <h1>BitStar</h1>
                            </NavLink>
                            <div>
                                <a href="https://facebook.com">
                                    <FontAwesomeIcon icon={faFacebookF} className="icon" />
                                </a>
                                <a href="https://twitter.com">
                                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                                </a>
                                <a href="http://t.me/">
                                    <FontAwesomeIcon icon={faTelegramPlane} className="icon" />
                                </a>
                            </div>
                        </Col>
                        <Col span={16}>
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={menus}
                                renderItem={item => (
                                    <List.Item>
                                        <h3>
                                            <FormattedMessage id={item.intlTitle} /></h3>
                                        <List
                                            size="small"

                                            dataSource={item.menu}
                                            renderItem={itemChild => (
                                                <List.Item>
                                                    <NavLink to={itemChild.path}>
                                                        <FormattedMessage id={itemChild.intlTitle} />
                                                    </NavLink>
                                                </List.Item>
                                            )}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                </div>
                <div className="copyright">
                    <FormattedMessage id="app.footer.copyright.copyright" /> © 2019. &nbsp;
                    <FormattedMessage id="app.footer.copyright.all_right_reserved" />.
                </div>
            </div>
        )
    };
}
export default FooterComponent;