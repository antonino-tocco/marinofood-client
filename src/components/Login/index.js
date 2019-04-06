import React from 'react';
import { connect } from 'react-redux';

import FormLogin from './components/FormLogin';

import './index.scss';

class Login extends React.Component{
    constructor(props) {
        super(props);

        this.handleClickSubmit = this.handleClickSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleClickSubmit(email, password) {
        this.login(email, password);
    }

    login(email, password) {
        //store.dispatch(consultantActions.login(email, password));
    }

    goToDashboard() {
        this.props.history.replace('/dashboard');
    }

    render() {
        return <FormLogin onSubmit={this.handleClickSubmit}  />
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Login);
