//To combine reducers
import {
    combineReducers
} from 'redux';
//Import all reducer
import pairsTable from './pairs-table-reducer';
import columns from './pairs-columns';

//Code here
const reducers = combineReducers({
    columns,
    pairsTable
});
export default reducers;