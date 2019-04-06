//Import react library
import React from 'react';

//Import components
import BreadcrumbComponent from '../../common/breadcrumb-component/breadcrumb-component';

//Import custome scss
import './content-header-component.scss';

//Import ant-design
import { Row, Col, Input } from 'antd';
const Search = Input.Search;

class ContentHeaderComponent extends React.Component {
    render() {
        return (
            <div id="content-header-component">
                <Row>
                    <Col span={12}>
                        <BreadcrumbComponent/>
                    </Col>
                    <Col span={12}>
                        <Search className="search-bar"
                            placeholder="Search"
                            allowClear
                            onSearch={value => console.log(value)}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ContentHeaderComponent;