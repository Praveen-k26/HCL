import { put, takeLatest, delay, all } from 'redux-saga/effects';


function* setUser({payload}) {
    yield put({type: 'SAVE_USERNAME', payload})
}

function* watchSetUser() {
    yield takeLatest('SET_USER', setUser)
}

function* setLogin() {
    yield put({type: 'USER_LOGOUT'})
}

function* watchSetLogin() {
    yield takeLatest('LOG_OUT', setLogin)
}

export default function* rootSaga() {
    yield all([

        watchSetUser(),
        watchSetLogin()

    ])
}