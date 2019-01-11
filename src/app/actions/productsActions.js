
// import { takeEvery, put, call } from 'redux-saga/effects';

// const fetchProductsApi = () => axios.get('http://demo7175924.mockable.io/get-products');
// function* fetchProductsSaga() {
//   try {
//     const response = yield call(fetchProductsApi);
//     console.log("response", response);
//     //yield put(fetchBooksSuccess(response.data));
//   } catch (e) {
//     console.log("Now this is an error");
//     //yield put(fetchBooksError(e));
//   }
// }



export function loadProducts(){
  let products;
  return{
    type: "LOAD_PRODUCTS",
    payload: products
  }

}
