import { put, call } from 'redux-saga/effects';
import { PhoneListApi, PhoneDetailsApi } from '../api/api';
import * as types from '../constants/actionTypes';


export function* searchPhoneSaga({ payload }) {
    try {
        const phones = yield call(PhoneListApi, payload);
        yield [
            put({ type: types.LIST_PHONE_SUCCESS, phones })
        ];
    } catch (error) {
        yield put({ type: 'LIST_PHONE_ERROR', error });
    }
}


export function* selectPhoneSaga({ payload }) {
    try {
        const phoneDetail = yield call(PhoneDetailsApi, payload);
        yield [
            put({ type: types.SELECTED_PHONE_SUCCESS, phoneDetail })
        ];
    } catch (error) {
        yield put({ type: 'SELECTED_PHONE_ERROR', error });
    }
}