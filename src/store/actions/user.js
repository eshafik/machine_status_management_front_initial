import history from "../../history";

import * as actionTypes from "./type"
import streams from "../../api/stream";
import machineStatusManagement from "../../api/machineStatusManagement";
import {notify_success} from "../../components/Notify";
import {refreshToken} from "./firebaseAuth";

export const getUserGroup = () => async (dispatch, getState) => {
    let response = await machineStatusManagement.get('/users/groups');
    if (response.status === 401){
        refreshToken();
        response = await machineStatusManagement.get('/users/groups');
    }
    dispatch({type: actionTypes.CREATE_USER, payload: response.data});
};


export const createUser = formValues => async (dispatch, getState) => {
    let response = await machineStatusManagement.post('/users/', {...formValues});
    if (response.status === 401){
        refreshToken();
        response = await machineStatusManagement.post('/users/', {...formValues});
    }
    if (response.status === 201) {
        notify_success("Stream Creation Succeed!");
    }
    dispatch({type: actionTypes.CREATE_USER, payload: response.data});
    history.push("/users");
};

export const fetchUsers = () => async dispatch => {
    let response = await machineStatusManagement.get('/users');
    if (response.status === 401){
        refreshToken();
        response = await machineStatusManagement.get('/users');
    }
    dispatch({type: actionTypes.FETCH_USERS, payload: response.data});
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: actionTypes.FETCH_STREAM, payload: response.data});
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({type: actionTypes.EDIT_STREAM, payload: response.data});
    notify_success("Updated Successfully!")
    history.push("/");
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({type: actionTypes.DELETE_STREAM, payload: id});
    history.push("/");
    notify_success("Stream has been deleted successfully!")
};