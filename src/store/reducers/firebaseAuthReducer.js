import * as actionTypes from '../actions/type';

let isUserAuthenticated = !!localStorage.getItem("idToken");

const INITIAL_STATE = {
    isUserAuthenticated: isUserAuthenticated
}

const firebaseAuthReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.USER_LOG_IN:
            return {isUserAuthenticated: true}
        case actionTypes.USER_LOG_OUT:
            localStorage.removeItem('idToken');
            localStorage.removeItem('refreshToken');
            return {isUserAuthenticated: false}
        default:
            return state;
    }
};

export default firebaseAuthReducer;