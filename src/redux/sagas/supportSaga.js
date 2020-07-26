import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getTickets() {
    try {
        const ticketsResponse = yield axios.get('/api/support')
        yield put({ 
            type: 'SET_TICKETS', 
            payload: ticketsResponse.data })
    } catch (error) {
        console.log('Error with support GET:', error);
    }
}

function* supportSaga() {
    yield takeEvery('GET_TICKETS', getTickets)
}

export default supportSaga;