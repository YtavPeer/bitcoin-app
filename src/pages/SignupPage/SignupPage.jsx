import { userService } from '../../services/userService'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/userActions'

import { Component } from 'react'

import './SignupPage.scss'

class _SignupPage extends Component {

    state = {
        userName: null
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ userName: { ...prevState.contact, [field]: value } }))
    }

    signUp = async (ev) => {
        ev.preventDefault()
        await this.props.signUp(this.state.userName)
        this.props.history.push('/home')
    }

    render() {
        return (
            <div>
                <h1>Please enter your name</h1>

                <label htmlFor="userName">User name</label>
                <input required type="text" id="userName" value={this.userName} onChange={this.handleChange} name="userName" />

                <button onClick={this.signUp}>sign up</button>
            </div>
        )
    }
}


const mapDispatchToProps = {
    signUp
}

export const SignupPage = connect(null, mapDispatchToProps)(_SignupPage)