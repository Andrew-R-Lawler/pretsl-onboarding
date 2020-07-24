import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getStores() {
    try {
        const storeResponse = yield axios.get('/api/store')
        yield put({ type: 'SET_STORES', storeResponse })
    } catch (error) {
        console.log('Error with store GET:', error);
    }
}

function* storesSaga() {
    yield takeEvery('GET_STORES', getStores)
}

export default storesSaga;