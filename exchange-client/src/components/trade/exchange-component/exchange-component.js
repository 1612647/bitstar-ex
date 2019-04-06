//Import react library
import React from 'react';

//Import components
import TradingLeftSidebar from '../common/trading-left-sidebar';
import TradingRightSidebar from '../common/trading-right-sidebar';
import TradingViewWidget from '../common/containers/tradingview-widget';
import LimitOrder from '../common/containers/order/limit-order';
import MarketOrder from '../common/containers/order/market-order';
import StopLimitOrder from '../common/containers/order/stop-limit-order';
import StopMarketOrder from '../common/containers/order/stop-market-order';

//Import custome scss
import './exchange-component.scss';

//Import intl
import { FormattedMessage } from 'react-intl';

//Import ant-design
import { Layout, List, Tabs } from 'antd';

const { Header, Content, Sider } = Layout;
const TabPane = Tabs.TabPane;

class ExchangeComponent extends React.Component {
    render() {
        return (
            <div id="exchange">
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={300} style={{ background: '#fff' }}>
                        <TradingLeftSidebar />
                    </Sider>
                    <Content style={{ padding: '0 24px' }}>
                        <Layout>
                            <Header>
                                <List grid={{ gutter: 32, column: 6 }} >
                                    <List.Item className="pair-name">
                                        <div>
                                            <span className="pair-base"> ETH </span>
                                            /
                                            <span className="pair-extra"> USDT </span>
                                        </div>
                                        <div className="pair-fullname">Ethereum</div>
                                    </List.Item>
                                    <List.Item>
                                        <div className="pair-info-lable">
                                            <FormattedMessage id="app.trade.pairs.last_price" />
                                        </div>
                                        <div className="pair-info-value">5000 USDT</div>
                                    </List.Item>
                                    <List.Item>
                                        <div className="pair-info-lable">
                                            <FormattedMessage id="app.trade.pairs.24h_change" />
                                        </div>
                                        <div className="pair-info-value">123
                                            <span className="price-changed">+20%</span>
                                        </div>
                                    </List.Item>
                                    <List.Item>
                                        <div className="pair-info-lable">
                                            <FormattedMessage id="app.trade.pairs.24h_high" />
                                        </div>
                                        <div className="pair-info-value">6000 USDT</div>
                                    </List.Item>
                                    <List.Item>
                                        <div className="pair-info-lable">
                                            <FormattedMessage id="app.trade.pairs.24h_low" />
                                        </div>
                                        <div className="pair-info-value">3000 USDT</div>
                                    </List.Item>
                                    <List.Item>
                                        <div className="pair-info-lable">
                                            <FormattedMessage id="app.trade.pairs.24h_vol" />
                                        </div>
                                        <div className="pair-info-value">4,000,000 BTC</div>
                                    </List.Item>
                                </List>
                            </Header>
                            <Content style={{ background: '#fff' }}>
                                <TradingViewWidget />

                                <Tabs defaultActiveKey="1" style={{ marginTop: 10 }}
                                    onChange={this.callback}>
                                    <TabPane tab="Limit" key="1">
                                        <LimitOrder />
                                    </TabPane>
                                    <TabPane tab="Market" key="2">
                                        <MarketOrder />
                                    </TabPane>
                                    <TabPane tab="Stop Limit" key="3">
                                        <StopLimitOrder />
                                    </TabPane>
                                    <TabPane tab="Stop Market" key="4">
                                        <StopMarketOrder />
                                    </TabPane>
                                </Tabs>
                            </Content>
                        </Layout>
                    </Content>
                    <Sider width={300} style={{ background: '#fff' }}>
                        <TradingRightSidebar />
                    </Sider>
                </Layout>
            </div>
        )
    }
}
export default ExchangeComponent;