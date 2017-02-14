import React, { Component } from 'react';
import { withRouter } from 'react-router';
import LoginForm from '../../components/LoginForm';
import { fetchTime, createProduct } from '../../actions/loginActions';

export default class Login extends Component {

    handleSubmit(data) {
        fetchTime()
        createProduct(data);
        this.props.router.push('/login/welcome/');
    }

    render() {
        return (
            <div>
                <LoginForm onSubmit={this.handleSubmit.bind(this)}></LoginForm>
            </div>
        );
    }
}
