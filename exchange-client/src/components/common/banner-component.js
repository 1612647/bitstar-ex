
import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './banner-component.scss';


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
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Carousel>
        );
    }
}

export default NavBarComponent;