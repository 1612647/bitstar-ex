//To combine reducers
import { combineReducers } from 'redux';

//Import all reducer
import lang from './lang';
import pairsTable from './pairs-table-reducer';
import columns from './pairs-columns';

//Code here
const reducers = combineReducers({
    lang,
    columns,
    pairsTable
});
export default reducers;