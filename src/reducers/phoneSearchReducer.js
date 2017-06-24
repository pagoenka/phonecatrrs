import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.filterText, action) {
    switch (action.type) {
        case types.SEARCH_PHONE_REQUEST:
            return action.payload.filterText;
        default:
            return state;
    }
}