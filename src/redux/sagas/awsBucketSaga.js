import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* updateAWSBucket(action){
    
}

function* awsBucketSaga(){
    yield takeEvery('UPDATE_AWS_BUCKET', updateAWSBucket) 
}

export default awsBucketSaga;