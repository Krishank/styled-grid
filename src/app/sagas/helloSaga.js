// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }

import { call } from 'redux-saga/effects';

export function* onFetchRecords() {

    try {
        const response = yield call(fetch, 'http://demo7175924.mockable.io/get-products');
        return responseBody = response.json();
        console.log("responseBody", responseBody);
        return responseBody
    } catch (e) {
        console.log("No records");
        return;
    }

}
