//Import react library
import React from 'react';

//Import custome scss
import './trading-left-sidebar.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design
import { Layout, Input, Tabs, Table } from 'antd';

const {
    Header, Content,
} = Layout;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

const columns = [{
    title: < FormattedMessage id="app.trade.pairs.pair" />,
    dataIndex: 'pair',
}, {
    title: < FormattedMessage id="app.trade.pairs.last_price" />,
    dataIndex: 'last_price',
}, {
    title: < FormattedMessage id="app.trade.pairs.24h_change" />,
    dataIndex: 'changed_24h',
}];
const data = [{
    id: '1',
    pair: 'ETH/USDT',
    name: 'Ethereum',
    last_price: 200,
    changed_24h: -12.2,
    highest_24h: 223.5,
    lowest_24h: 115,
    volume_24h: 3329424
}, {
    id: '2',
    pair: 'ETH2/USDT',
    name: 'Ethereum2',
    last_price: 200,
    changed_24h: -12.2,
    highest_24h: 223.5,
    lowest_24h: 115,
    volume_24h: 3329424
}, {
    id: '3',
    pair: 'ETH3/USDT',
    name: 'Ethereum3',
    last_price: 200,
    changed_24h: -12.2,
    highest_24h: 223.5,
    lowest_24h: 115,
    volume_24h: 3329424
}]
class TradingLeftSideBar extends React.Component {
    callback = (key) => {
        console.log(key);
    }

    render() {
        return (
            <div id="trading-left-sidebar">
                <Layout style={{ background: '#fff' }}>
                    <Header>
                        <Search
                            placeholder="Search"
                            onSearch={value => console.log(value)} />
                    </Header>
                    <Content>
                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab={< FormattedMessage id="app.trade.pairs.favorite" />} key="1">
                                <Table columns={columns} dataSource={data} size="small" pagination={false} />
                            </TabPane>
                            <TabPane tab="BTC" key="2">
                                <Table columns={columns} dataSource={data} size="small" pagination={false} />
                            </TabPane>
                            <TabPane tab="USDT" key="3">
                                <Table columns={columns} dataSource={data} size="small" pagination={false} />
                            </TabPane>
                            <TabPane tab="VNB" key="4">
                                <Table columns={columns} dataSource={data} size="small" pagination={false} />
                            </TabPane>
                        </Tabs>
                    </Content>
                </Layout>
            </div>
        )
    };
}
export default TradingLeftSideBar;