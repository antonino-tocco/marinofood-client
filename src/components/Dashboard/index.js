import React, {Component} from 'react';
import { Router } from 'react-router';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {AppBar} from "@material-ui/core";

import {theme} from '../../helpers/theme';
import {history} from '../../helpers/history';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    handleLeftButton() {

    }

    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <AppBar position='fixed' title={<div><img src='' className="app-bar-logo"/></div>} onLeftIconButtonClick={this.handleLeftButton} showMenuIconButton={true}/>
                        <div className='container'>
                            <div className='row'>
                                <Router history={history}>
                                </Router>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Dashboard;
