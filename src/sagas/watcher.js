import { takeLatest } from 'redux-saga/effects';
import { searchPhoneSaga, selectPhoneSaga } from './phoneSaga';
import * as types from '../constants/actionTypes';

export default function* watchSearchPhone() {
    yield takeLatest(types.LIST_PHONE_REQUEST, searchPhoneSaga);
    yield takeLatest(types.SELECTED_PHONE, selectPhoneSaga);
}