import * as types from '../constants/actionTypes';

export const selectPhoneAction = (payload) => ({
    type: types.SELECTED_PHONE,
    payload
});

export const listPhoneAction = (payload) => ({
    type: types.LIST_PHONE_REQUEST,
    payload
});


export const sortPhoneAction = (payload) => ({
    type: types.SORT_PHONE_REQUEST,
    payload
});


export const searchPhoneAction = (payload) => ({
    type: types.SEARCH_PHONE_REQUEST,
    payload
});