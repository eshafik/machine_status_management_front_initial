import React from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';

import List from "./Project/List";
import Create from "./Project/Create";
import Edit from "./Project/Edit";
import Delete from "./Project/Delete";
import Details from "./Project/Details";
import LoginForm from "../components/LoginForm";


function Project() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={List}/>
                <Route path="/streams/new" exact component={Create}/>
                <Route path="/streams/edit/:id" exact component={Edit}/>
                <Route path="/streams/delete/:id" exact component={Delete}/>
                <Route path="/streams/:id" exact component={Details}/>
                <Route path="/login/" exact component={LoginForm}/>
            </Switch>
        </React.Fragment>
    );
}

const mapStateToProps = (state) =>{
    return {isAuthenticated: state.auth.isAuthenticated}
}

export default connect(mapStateToProps)(Project);
