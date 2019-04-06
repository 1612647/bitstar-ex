//Import react library
import React from 'react';

//Import components
import PriceListTableComponent from './price-list-table-component';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design 
import { Tabs, Icon, Input } from 'antd';

const TabPane = Tabs.TabPane;
const Search = Input.Search;
    
function callback(key) {
    console.log(key);
}
class PriceListComponent extends React.Component {
    render() {
        const operations = <Search placeholder="Search"
            onSearch={value => console.log(value)}
            style={{ width: 200 }} />;

        return (
            <div>

                <Tabs defaultActiveKey="1" tabBarExtraContent={operations} onChange={callback} >
                    <TabPane tab={<span><Icon type="star" theme="twoTone" />
                        <FormattedMessage id="app.trade.pairs.favorite" /> </span>} key="1">
                        <PriceListTableComponent />
                    </TabPane>
                    <TabPane tab="BTC" key="2">
                        <PriceListTableComponent />
                    </TabPane>
                    <TabPane tab="USDT" key="3">
                        <PriceListTableComponent />
                    </TabPane>
                    <TabPane tab="VNB" key="4">
                        <PriceListTableComponent />
                    </TabPane>
                </Tabs>

            </div>
        )
    };
}
export default PriceListComponent;