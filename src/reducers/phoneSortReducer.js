import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.sortBy, action) {
    switch (action.type) {
        case types.SORT_PHONE_REQUEST:
            return action.payload.sortBy;
        default:
            return state;
    }
}