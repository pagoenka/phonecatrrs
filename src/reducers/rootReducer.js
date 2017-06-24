import { combineReducers } from 'redux';
import phones from './phoneListReducer';
import selectedPhone from './phoneDetailsReducer';
import sortBy from './phoneSortReducer';
import filterText from './phoneSearchReducer';


// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    phones, //remember
    selectedPhone,
    sortBy,
    filterText
});

export default rootReducer;