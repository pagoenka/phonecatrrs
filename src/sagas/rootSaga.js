import { fork } from 'redux-saga/effects';
import watchSearchPhone from './watcher';

export default function* startForman() {
    yield fork(watchSearchPhone);
}