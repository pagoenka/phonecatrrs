import { combineReducers } from 'redux';
import phones from './phoneListReducer';
import selectedPhone from './phoneDetailsReducer';


// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    phones, //remember
    selectedPhone
});

export default rootReducer;