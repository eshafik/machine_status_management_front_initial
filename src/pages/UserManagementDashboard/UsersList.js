import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from "react-router-dom";
import history from "../../history";

import {fetchUsers} from "../../store/actions/user";
import Table from "../../components/Table";

class UsersList extends React.Component{
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderList(){

        return  this.props.users.results.map((user, index) => {
            return(
                <tr key={index}>
                    <td>{user.employee_id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.is_blocked ? "Blocked" : "Active"}</td>
                    <td><Link to={`/users/edit/${user.id}`} className="btn btn-primary">Edit</Link></td>
                </tr>
            )
        });
    };

    render() {
        if (! this.props.isAuthenticated){
            return <Redirect to="/phone-login" />;
        }
        if (!this.props.users.results){
            return <div>Loading</div>
        }

        return(
            <React.Fragment>
                <Table
                    title = "Demo Data"
                    headers={["Employee Id", "Name", "Phone", "Status", "Action"]}
                    values={this.renderList()}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        isAuthenticated: state.fbAuth.isUserAuthenticated};
};
export default connect(mapStateToProps, {fetchUsers})(UsersList);