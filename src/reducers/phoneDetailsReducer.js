import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.selectedPhone, action) {
    switch (action.type) {
        case types.SELECTED_PHONE_SUCCESS:
            return { ...state, selectedPhone: action.phoneDetail };
        default:
            return state;
    }
}