import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import _ from 'lodash';

import {fetchStreams} from "../../store/actions/stream";
import Table from "../../components/Table";

class List extends React.Component{
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList(){

        return  this.props.streams.map((stream, index) => {
            return(
                <tr key={index}>
                    <td>{stream.id}</td>
                    <td>{stream.title}</td>
                    <td>{stream.description}</td>
                    <td><Link to={`/streams/edit/${stream.id}`} className="btn btn-primary">Edit</Link></td>
                    <td><Link to={`/streams/delete/${stream.id}`} className="btn btn-danger">Delete</Link></td>
                </tr>
            )
        });
    };

    render() {
        if (!this.props.streams){
            return <div>Loading</div>
        }

        return(
            <React.Fragment>
                <Table
                    title = "Demo Data"
                    headers={["Id", "Title", "Description", "Action", "Action"]}
                    values={this.renderList()}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {streams: Object.values(state.streams.results)};
};
export default connect(mapStateToProps, {fetchStreams})(List);