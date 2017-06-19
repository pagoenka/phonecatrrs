import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.phones, action) {
    switch (action.type) {
        case types.LIST_PHONE_SUCCESS:
            return [...state, action.phones];
        default:
            return state;
    }
}