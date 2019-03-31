//Import constants
import * as actionTypes from '../constants/action-types'
//Import actions
// import showAll from '../actions';

const initializeState = [{
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

const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_PAIRS:
            return state;
        default:
            return state;
    }
}

export default reducer;