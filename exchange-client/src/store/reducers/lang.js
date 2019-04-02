// Import constant 
import * as actionTypes from '../../constants/action-types';
import * as langName from '../../constants/language-name';

// Language data
import intlMessagesEnUS from '../../lang/data/en_US.json';
import intlMessagesViVN from '../../lang/data/vi_VN.json';

var initializeState = {
    locale: langName.EN_US,
    messages: intlMessagesEnUS
};

var reducer = (state = initializeState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANG:
            state.locale = action.lang;
            console.log(state.locale);
            switch(state.locale){
                case langName.EN_US: 
                    state.messages = intlMessagesEnUS;
                    break;
                case langName.VI_VN:
                    state.messages = intlMessagesViVN;
                    break;
                default:
                    state.messages = intlMessagesEnUS;
            }
            return {...state};
        default:
            return {...state};
    }
};

export default reducer;