//Import react library
import React from 'react';

//Import custome scss
import './trading-right-sidebar.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design
import { Layout, Tabs, Table, Button, Select, Icon } from 'antd';

const {
    Content,
} = Layout;
const TabPane = Tabs.TabPane;
const ButtonGroup = Button.Group;
const Option = Select.Option;

const columnsMarket = [{
    title: < FormattedMessage id="app.trade.market.price" />,
    dataIndex: 'price',
}, {
    title: < FormattedMessage id="app.trade.market.size" />,
    dataIndex: 'size',
}, {
    title: < FormattedMessage id="app.trade.market.amount" />,
    dataIndex: 'amount',
}];

const dataMarket = [{
    key: '1',
    price: '1000',
    size: 0.5,
    amount: '0.1'
}, {
    key: '2',
    price: '6000',
    size: 4.3,
    amount: '0.2'
}, {
    key: '3',
    price: '5000',
    size: 0.5,
    amount: '0.2'
}];

const columnsTrades = [{
    title: < FormattedMessage id="app.trade.trades.price" />,
    dataIndex: 'price',
}, {
    title: < FormattedMessage id="app.trade.trades.size" />,
    dataIndex: 'size',
}, {
    title: < FormattedMessage id="app.trade.trades.time" />,
    dataIndex: 'time',
}];

const dataTrades = [{
    key: '1',
    price: '1000',
    size: 0.5,
    time: '11:45:00'
}, {
    key: '2',
    price: '6000',
    size: 4.3,
    time: '11:45:01'
}, {
    key: '3',
    price: '5000',
    size: 0.5,
    time: '11:45:03'
}];

const decimals = [];
for (let i = 1; i <= 8; i++) {
    decimals.push(<Option key={i}>{i.toString() + ' decimals'}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

class TradingLeftSideBar extends React.Component {
    render() {
        return (
            <div id="trading-right-sidebar">
                <Layout style={{ background: '#fff' }}>
                    <Content>
                        <Tabs defaultActiveKey="1" className="market-tab" onChange={this.callback}>
                            <TabPane tab={< FormattedMessage id="app.trade.market" />} key="1">
                                <div style={{ width: '100%' }}>
                                    <ButtonGroup>
                                        <Button>
                                            <Icon type="border-top" />
                                        </Button>
                                        <Button>
                                            <Icon type="menu-unfold" />
                                        </Button>
                                        <Button>
                                            <Icon type="border-bottom" />
                                        </Button>
                                    </ButtonGroup>
                                    <Select style={{ float: "right" }}
                                        placeholder="Decimals"
                                        defaultValue="1"
                                        onChange={handleChange}>
                                        {decimals}
                                    </Select>
                                </div>

                                <Table columns={columnsMarket} dataSource={dataMarket} size="small" pagination={false}
                                    style={{ border: 0 }} />
                            </TabPane>
                            <TabPane tab={< FormattedMessage id="app.trade.trades" />} key="2">
                                <Table columns={columnsTrades} dataSource={dataTrades} size="small" pagination={false} />
                            </TabPane>
                        </Tabs>
                    </Content>
                </Layout>
            </div>
        )
    };
}
export default TradingLeftSideBar;