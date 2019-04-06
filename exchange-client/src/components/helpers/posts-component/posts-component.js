//Import react library
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import components
import ContentHeaderComponent from '../content-header-component/content-header-component';

//Import custome scss
import './posts-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design
import { List, Row, Col } from 'antd';

const data = [
    {
        path: './news',
        title: 'Ant Design Title 1',
        content: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
        path: './news',
        title: 'Ant Design Title 1',
        content: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
        path: './news',
        title: 'Ant Design Title 1',
        content: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
        path: './news',
        title: 'Ant Design Title 1',
        content: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
];

class PostsComponent extends React.Component {
    render() {
        return (
            <div id="posts-component">
                <ContentHeaderComponent />
                <div className="post-list">
                    <h1 className="title">
                        <FormattedMessage id="app.news" /></h1>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Row>
                                    <Col span={18} className="post-title">
                                        <List.Item.Meta
                                            title={
                                                <NavLink to={item.path}>
                                                    {item.title}
                                                </NavLink>}
                                            description={item.content}
                                        />
                                    </Col>
                                    <Col span={6} className="post-time">
                                        <div>15 hours ago </div>
                                    </Col>
                                </Row>
                            </List.Item>
                        )} >

                    </List>
                </div>
            </div>
        )
    }
}
export default PostsComponent;