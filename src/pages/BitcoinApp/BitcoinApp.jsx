
import { Component } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { HeaderCmp } from '../../cmps/HeaderCmp'
import { HomePage } from '../HomePage'
import { ContactPage } from '../ContactPage'
import { StatisticPage } from '../StatisticPage'
import { ContactDetailsPage } from '../ContactDetailsPage'
import { ContactEdit } from '../ContactEdit'

import './BitcoinApp.scss'

export class BitcoinApp extends Component {


    render() {
        return (
            <Router>
                <div className="bitcoin-app">
                    <HeaderCmp />
                    <Switch>
                        <Route component={ContactEdit} path='/contact/edit/:id?' />
                        <Route component={ContactDetailsPage} path='/contact/:id' />
                        <Route component={ContactPage} path='/contact' />
                        <Route component={StatisticPage} path='/statistic' />
                        <Route component={HomePage} path='/' />
                    </Switch>
                </div>
            </Router>

        )
    }
}

