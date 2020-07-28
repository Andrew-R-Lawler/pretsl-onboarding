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

function* getIndividualStore(action) {
    try{
        const individualStoreResponse = yield axios.get(`/api/store/${action.payload}`)
        console.log('individualStoreResponse', individualStoreResponse);
        yield put({ type: 'SET_INDIVIDUAL_STORE', payload: individualStoreResponse.data })
    } catch (error) {
        console.log('Error with individual store GET:', error);
    }
}


function* updateStore(action) {
    try{
        yield axios.put(`/api/store/${action.payload.id}`, action.payload)
        yield put({ type: 'GET_INDIVIDUAL_STORE', payload: action.payload.id })
    } catch (error) {
        console.log('Error with store PUT:', error);
    }
}


function* storesSaga() {
    yield takeEvery('GET_STORES', getStores)
    yield takeEvery('GET_INDIVIDUAL_STORE', getIndividualStore)
    yield takeEvery('UPDATE_STORE', updateStore)
}

export default storesSaga;