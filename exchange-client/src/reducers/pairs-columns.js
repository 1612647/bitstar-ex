//Import constant 
import * as actionTypes from '../constants/action-types';

var initializeState = [{

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

var reducer = (state = initializeState, action) => {
    switch (action.type) {
        case actionTypes.COLUMNS_CONFIG:
            return state;
        default:
            return state;
    }
};

export default reducer;