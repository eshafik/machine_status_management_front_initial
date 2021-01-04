import React from 'react';
import {Field, reduxForm} from "redux-form";


class UserForm extends React.Component{

    renderError(meta){
        if (meta.touched && meta.error){
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, type, meta}) => {
        const className = `form-group ${meta.error && meta.touched ? "has-error has-feedback": "has-feedback"}`;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className={className}>
                        <label>{label}</label>
                        <input {...input} className="form-control" type={type}/>
                        {this.renderError(meta)}
                    </div>
                </div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Edit Profile</h4>
                            </div>
                            <div className="card-body">
                                <form
                                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                                >

                                    <Field
                                        name="phone"
                                        component={this.renderInput}
                                        label="Phone"
                                        type="text"
                                    />
                                    <Field
                                        name="name"
                                        component={this.renderInput}
                                        label="NAME"
                                        type="text"
                                    />
                                    <Field
                                        name="employee_id"
                                        component={this.renderInput}
                                        label="Employee ID"
                                        type="text"
                                    />
                                    <Field
                                        name="user_group"
                                        component={this.renderInput}
                                        label="Permission"
                                        type="text"
                                    />
                                    <Field
                                        name="section"
                                        component={this.renderInput}
                                        label="Section"
                                        type="text"
                                    />
                                    <button
                                        className="btn btn-info btn-fill pull-right"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const validate =  (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'You must entry a title';
    }
    if(!formValues.description){
        errors.description = 'You must entry a description';
    }
    return errors
};

export default reduxForm({
    form: "UserForm",
    validate: validate
})(UserForm);
