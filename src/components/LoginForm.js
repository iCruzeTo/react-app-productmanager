import React, { Component } from 'react';

const LoginForm = React.createClass({

  getInitialState() {
      return {
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          email: this.props.email
      }
  },

    componentWillReceiveProps(props) {
        this.setState(props);
    },

    handleUserNameChange(e) {
        this.setState({
            firstName: e.target.value
        });
    },

    handlePasswordChange(e) {
        this.setState({
            lastName: e.target.value
        });
    },

    handleEmailChange(e) {
          this.setState({
              email: e.target.value
          });
      },

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    },

    render() {
        return (
            <form name="login" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="login">

                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="login_username">First Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="login_username"
                                   required="required"
                                   onChange={this.handleUserNameChange}
                                   className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="login_password">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="login_password"
                                   required="required"
                                   onChange={this.handlePasswordChange}
                                   className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="login_email">Email</label>
                        <div className="col-sm-10">
                            <input type="email"
                                   id="login_email"
                                   onChange={this.handleEmailChange}
                                   required="required"
                                   className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit"
                                    id="login_submit"
                                    className="btn-default btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
});

export default LoginForm;
