//import react library
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//Import router config
import routes from '../../../router';

//Import custome scss
import './breadcrumb-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Impoer ant-design
import { Breadcrumb, Icon } from 'antd';

const BreadcrumbComponent = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                    {
                        routes.findIndex(route => route.path === url) > 0 ?
                            <FormattedMessage id={routes[routes.findIndex(route => route.path === url)].breadcrumbIntl} />
                            : ''
                    }
                </Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
            <Link to="/">
                <Icon type="home" />
            </Link>
        </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
        <div id="breadcrumb-component">
            <Breadcrumb>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    );
});

export default BreadcrumbComponent;