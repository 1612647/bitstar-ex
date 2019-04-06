//Import react library
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import custome scss
import './posts-container.scss';

//Import ant-design
import { List, Row, Col, Typography } from 'antd';

const { Text } = Typography;

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

class PostsContainer extends React.Component {
    render() {
        return (
            <div id="posts-container">
                <div className="post-list">
                    <h1 className="title">{this.props.title}</h1>
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

                        <List.Item className="load-more">
                            <NavLink to={'/posts'}>
                                {/* <FormattedMessage id="app.menu.news" /> */}
                                <Text type="danger"> See all threads </Text>
                            </NavLink>
                        </List.Item>
                    </List>,
                </div>
            </div>
        )
    }
}
export default PostsContainer;