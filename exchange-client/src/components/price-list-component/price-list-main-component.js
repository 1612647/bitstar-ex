//Import react library
import React from 'react';

//Import components
import PriceListTableComponent from './price-list-table-component';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design 
import { Tabs, Icon } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
class PriceListComponent extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback} >
                <TabPane tab={<span><Icon type="star" theme="twoTone" /> 
                    <FormattedMessage id="pairs.favorite" /> </span>} key="1">
                    <PriceListTableComponent/>
                </TabPane>
                <TabPane tab="BTC" key="2">
                    <PriceListTableComponent/>
                </TabPane>
                <TabPane tab="USDT" key="3">
                    <PriceListTableComponent/>
                </TabPane>
                <TabPane tab="VNB" key="4">
                    <PriceListTableComponent/>
                </TabPane>
            </Tabs>
        )
    };
}
export default PriceListComponent;