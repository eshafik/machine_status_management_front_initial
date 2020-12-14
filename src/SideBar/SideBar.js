import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';


class SideBar extends React.Component{
    renderSideBarMenu(){
        if(!this.props.isAuthenticated){
            return null;
        }
        return(
            <ul className="nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/#">
                        <i className="nc-icon nc-chart-pie-35"/>
                        <p>Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/#">
                        <i className="nc-icon nc-circle-09"/>
                        <p>User Profile</p>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/#">
                        <i className="nc-icon nc-notes"/>
                        <p>Table List</p>
                    </Link>
                </li>
            </ul>
        )
    }
    render() {
        return(
            <div className="sidebar" data-color="grey">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <Link to="/#" className="simple-text">
                            MSI Dashboard
                        </Link>
                    </div>
                    {this.renderSideBarMenu()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isAuthenticated: state.auth.isAuthenticated}
}

export default connect(mapStateToProps)(SideBar);