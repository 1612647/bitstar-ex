//Import constants
import * as actionTypes from '../../constants/action-types';

//Code here
export const changeLang = (lang) => ({
    type: actionTypes.CHANGE_LANG,
    lang
});

export const showAll = () => ({
    type: actionTypes.SHOW_PAIRS,
    name: 'dfsf'
});