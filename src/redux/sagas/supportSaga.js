import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getTickets() {
    try {
        const ticketsResponse = yield axios.get('/api/support')
        yield put({ 
            type: 'SET_TICKETS', 
            payload: ticketsResponse.data 
        })
    } catch (error) {
        console.log('Error with support GET:', error);
    }
}

function* createNewTicket(action) {
    try {
        yield axios.post('/api/support', action.payload)
    } catch (error) {
        console.log('ERROR with support PUT:', error);
    }
}

function* supportSaga() {
    yield takeEvery('GET_TICKETS', getTickets)
    yield takeLatest('CREATE_NEW_TICKET', createNewTicket)
}

export default supportSaga;