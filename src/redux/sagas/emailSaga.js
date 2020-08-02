import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* sendEmail() {
    try {
        axios.post('/api/email')
        yield put({ type: 'EMAIL_SENT' })
    } catch (error) {
        console.log('Error with Email POST:', error);
    }
}

function* emailSaga() {
    yield takeEvery('SEND_EMAIL', sendEmail);
}

export default emailSaga;