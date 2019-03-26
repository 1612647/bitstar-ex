import React from 'react';
import PriceListComponent from '../price-list-component/price-list-main-component';
import BannerComponent from '../common-components/banner-component';
import './home-component.scss';

class HomeComponent extends React.Component{
    render(){
        return(
            <div>
                <div className="banner">
                    <BannerComponent/>
                </div>
                <div className="price-list">
                    <PriceListComponent/>
                </div>
            </div>
        )
    };
}

export default HomeComponent