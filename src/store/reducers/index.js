import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import streamReducer from "./streamReducer";
import authReducer from "./authReducer";
import firebaseAuthReducer from "./firebaseAuthReducer";
import userReducer from "./userReducer";

export default combineReducers({
    form: formReducer,
    streams: streamReducer,
    auth: authReducer,
    fbAuth: firebaseAuthReducer,
    users: userReducer
});