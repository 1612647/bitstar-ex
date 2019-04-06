
//Import react library
import React from 'react';

//Import custome scss
import './banner-component.scss';

//Import ant-design 
import { Carousel } from 'antd';


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
            <Carousel autoplay>
                <div className="banner"></div>
                <div className="banner"></div>
                <div className="banner"></div>
                <div className="banner"></div>
            </Carousel>
        );
    }
}

export default NavBarComponent;