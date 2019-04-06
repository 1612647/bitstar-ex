//Import react library
import React from 'react';

//Import components
import ContentHeaderComponent from '../content-header-component/content-header-component';
import PostsContainer from '../posts-container/posts-container';

//Import custome scss
import './announcements-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design
import { Row, Col } from 'antd';

class AnnouncementsComponent extends React.Component {
    render() {
        return (
            <div id="announcements-component">
                <ContentHeaderComponent />
                <Row>
                    <Col span={12}>
                        <PostsContainer title={<FormattedMessage id="app.posts.news_listing" />} />
                    </Col>
                    <Col span={12}>
                        <PostsContainer title={<FormattedMessage id="app.posts.lastest_news" />} />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default AnnouncementsComponent;