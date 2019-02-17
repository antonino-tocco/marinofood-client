import React from 'react';
import _ from 'lodash';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { theme } from '../../../helpers/theme';
import { store } from '../../../helpers/store';



const style = {
    cssLabel: {
        '&$cssFocused': {
            color: "#1e1e1e",
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor:  "#1e1e1e",
        },
    }
};


class FormLogin extends  React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: {
                email: true,
                password: true
            },
            actionDisabled: true
        };

        this.storeEvent = this.storeEvent.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.unsubscribe = null;
    }

    storeEvent() {

    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(this.storeEvent);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.validateRequiredField(event.target.name, event.target.value)
    }

    validateRequiredField(key, value) {
        console.log("@@@@validate", key, value);
        let error = this.state.error;
        switch (key) {
            case 'email':
                error.email = true;
                break;
            case 'password':
                error.password = true;
                break;
            default:
                break;
        }
        let actionDisabled = false;
        _.each(error, function (value, key) {
            if (value) {
                actionDisabled = true;
            }
        });
        this.setState({
            error,
            actionDisabled
        });
    }

    onSubmit() {
        console.log("@@@submit");
        this.props.onSubmit(this.state.email, this.state.password);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={theme}>
                    <div>
                        <div className="logo_form_login">
                            <img src='' />
                        </div>
                        <div className="center_form_login">
                            <div className="title_form_login">Insert your Email adress and Password to access your private area</div>
                            <TextField
                                FormLabelClasses={{
                                    root: style.cssLabel,
                                    focused: style.cssFocused,
                                }}
                                hintText="Enter your email"
                                name="email"
                                floatingLabelText="E-mail"
                                onChange={this.onFieldChange}
                                //errorText={this.state.error.email ? globalConstants.errorText.default : ''}
                                fullWidth={true}/>
                            <br/>
                            <TextField
                                hintText="Enter your password"
                                name="password"
                                floatingLabelText="Password"
                                onChange={this.onFieldChange}
                                //errorText={this.state.error.password ? globalConstants.errorText.default : ''}
                                fullWidth={true}
                                type="password"/>
                            <br/><br />
                            <div className="row actions_form_login">
                                <div className="col-md-6">
                                    <a className="reset_link_form_login" href="">RESET PASSWORD</a>
                                </div>
                                <div className="col-md-6">
                                    <Button variant="contained" label="SIGN IN" size="large"  secondary={true} onClick={(event) => this.onSubmit()} fullWidth={true} disabled={this.state.actionDisabled}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }


}

export default FormLogin;
