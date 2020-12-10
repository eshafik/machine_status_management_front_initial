import React from 'react';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Notify = props => {
    const notify = () =>{
        toast.success('Basic notification!', {
            position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000})
    }
    return (
        <button onClick={notify}>
        Click here
        </button>
    );
};

export default Notify;