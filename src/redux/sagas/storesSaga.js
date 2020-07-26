import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getStores() {
    try {
        const storeResponse = yield axios.get('/api/store')
        console.log('storeResponse', storeResponse);
        
        yield put({ type: 'SET_STORES', payload: storeResponse.data })
    } catch (error) {
        console.log('Error with store GET:', error);
    }
}

function* storesSaga() {
    yield takeEvery('GET_STORES', getStores)
}

export default storesSaga;