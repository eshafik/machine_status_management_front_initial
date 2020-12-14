import React from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';

import List from "./Project/List";
import Create from "./Project/Create";
import Edit from "./Project/Edit";
import Delete from "./Project/Delete";
import Details from "./Project/Details";
import LoginForm from "../components/LoginForm";


function UnAuthenticated() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/login" exact component={LoginForm}/>
            </Switch>
        </React.Fragment>
    );
}

const mapStateToProps = (state) =>{
    return {isAuthenticated: state.auth.isAuthenticated}
}

export default connect(mapStateToProps)(UnAuthenticated);
