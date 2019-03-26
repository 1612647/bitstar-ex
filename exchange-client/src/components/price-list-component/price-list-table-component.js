import React from 'react';
import { Table } from 'antd';
// import * as pairs from '../../data/list-coin';

const columns = [{
    
}, {
    title: 'Pair',
    dataIndex: 'pair',
    sorter: (a, b) => a.name.length - b.name.length,
    defaultSortOrder: 'descend',
    sortDirections: ['descend', 'ascend'],
}, {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend'],
}, {
    title: 'Last price',
    dataIndex: 'last_price',
    sorter: (a, b) => a.last_price - b.last_price,
    sortDirections: ['descend', 'ascend'],
}, {
    title: '24h change',
    dataIndex: 'changed_24h',
    sorter: (a, b) => a.changed_24h - b.changed_24h,
    sortDirections: ['descend', 'ascend'],
}, {
    title: '24h high',
    dataIndex: 'highest_24h',
    sorter: (a, b) => a.highest_24h - b.highest_24h,
    sortDirections: ['descend', 'ascend'],
}, {
    title: '24h low',
    dataIndex: 'lowest_24h',
    sorter: (a, b) => a.lowest_24h - b.lowest_24h,
    sortDirections: ['descend', 'ascend'],
}, {
    title: '24h volume',
    dataIndex: 'volume_24h',
    sorter: (a, b) => a.volume_24h - b.volume_24h,
    sortDirections: ['descend', 'ascend'],
}];
const pairs = [{
    id: 1,
    pair: 'ETH/USDT',
    name: 'Ethereum',
    last_price: 200,
    changed_24h: -12.2,
    highest_24h: 223.5,
    lowest_24h: 115,
    volume_24h: 3329424
}, {
    id: 2,
    pair: 'ETH2/USDT',
    name: 'Ethereum2',
    last_price: 200,
    changed_24h: -12.2,
    highest_24h: 223.5,
    lowest_24h: 115,
    volume_24h: 3329424
}, {
    id: 3,
    pair: 'ETH3/USDT',
    name: 'Ethereum3',
    last_price: 200,
    changed_24h: -12.2,
    highest_24h: 223.5,
    lowest_24h: 115,
    volume_24h: 3329424
}];
function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

class PriceListTableComponent extends React.Component {

    render() {
        return (
            <Table columns={columns} dataSource={pairs} onChange={onChange} />
        )
    };
    debugger
}
export default PriceListTableComponent;