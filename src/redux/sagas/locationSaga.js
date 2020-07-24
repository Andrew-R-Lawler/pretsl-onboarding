import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getLocations() {
    try{
    const locationResponse = yield axios.get('/api/locations')
    yield put({ type: 'SET_LOCATIONS', locationResponse })
    } catch (error) {
        console.log('Error with locations GET:', error);
    }
}

function* locationSaga() {
    yield takeEvery('GET_LOCATIONS', getLocations)
}

export default locationSaga;