import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getLocations() {
    try{
    const locationResponse = yield axios.get('/api/location')
    yield put({ type: 'SET_LOCATIONS', payload: locationResponse.data })
    } catch (error) {
        console.log('Error with locations GET:', error);
    }
}

function* postLocation(action){
    
    const config = {
        store_id: action.payload.store_id,
        address: action.payload.address,
        timezone: action.payload.timezone,
        phone_number: action.payload.phone_number,
        location_email: action.payload.location_email,
        point_of_contact: action.payload.point_of_contact,
    }
    
    try{
        yield axios.post('/api/location', config);
    }catch(error){
        console.log('error with location Post', error);
    }

    try {
        const locationResponse = yield axios.get('/api/location');

        yield put({type: 'SET_LOCATIONS', payload: locationResponse})
    }catch(error){
        console.log('Error with exercise_events get request', error);
    }

}

function* locationSaga() {
    yield takeEvery('GET_LOCATIONS', getLocations)
    yield takeEvery('POST_LOCATION', postLocation)
}

export default locationSaga;