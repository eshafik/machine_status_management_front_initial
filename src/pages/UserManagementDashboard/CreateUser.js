import React from 'react';
import {connect} from 'react-redux';

import UserForm from "./UserForm";
import {createUser} from "../../store/actions/user";

class Create extends React.Component{
    onSubmit = (formValues) => {
        this.props.createUser(formValues);
    }
    render() {
        return(
            <React.Fragment>
                <UserForm
                    onSubmit={this.onSubmit}
                    groups = {this.props.groups}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {groups: state.users.groups}
}

export default connect(mapStateToProps, {createUser})(Create);