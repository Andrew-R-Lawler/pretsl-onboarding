import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getTickets() {
    try {
        const ticketsResponse = yield axios.get('/api/')
        yield put({ type: 'SET_LOCATIONS', locationResponse })
    } catch (error) {
        console.log('Error with locations GET:', error);
    }
}

function* supportSaga() {
    yield takeEvery('GET_TICKETS', getTickets)
}

export default locationSaga;