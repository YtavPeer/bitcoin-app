
import { Component } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { HeaderCmp } from '../../cmps/HeaderCmp'
import { HomePage } from '../HomePage'
import { ContactPage } from '../ContactPage'
import { StatisticPage } from '../StatisticPage'
import { ContactDetailsPage } from '../ContactDetailsPage'
import { ContactEdit } from '../ContactEdit'
import { SignupPage } from '../SignupPage'
import { connect } from 'react-redux'
import './BitcoinApp.scss'

function _BitcoinApp(props) {


    const PrivateRoute = (props) => {
        return props.currUser ? <Route component={props.component} path={props.path} /> : <Redirect to="/" />
    }

    return (
        <Router>
            <div className="bitcoin-app">
                <HeaderCmp />
                <Switch>
                    <Route component={ContactEdit} path='/contact/edit/:id?' />
                    <Route component={ContactDetailsPage} path='/contact/:id' />
                    <Route component={ContactPage} path='/contact' />
                    <Route component={StatisticPage} path='/statistic' />
                    <PrivateRoute component={HomePage} currUser={props.currUser} path='/home' />
                    <Route component={HomePage} path='/home' />
                    <Route component={SignupPage} path='/' />
                </Switch>
            </div>
        </Router>
    )
}


const mapStateToProps = state => {
    return {
        currUser: state.userReducer.user,
    }
}

const mapDispatchToProps = {

}

export const BitcoinApp = connect(mapStateToProps, null)(_BitcoinApp)