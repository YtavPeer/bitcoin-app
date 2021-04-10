
import { Component } from 'react'
import { connect } from 'react-redux'
import { getContactById } from '../../store/actions/contactActions'
import { onTransferCoins } from '../../store/actions/userActions'

import './TransferFund.scss'

class _TransferFund extends Component {

    state = {
        amount: null
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ amount: { ...prevState.contact, [field]: value } }))
    }

    onTransfer = async (ev) => {
        ev.preventDefault()
        if (this.props.currUser.coins < +this.state.amount.amount) return alert('you dont have money')
        else {
            this.props.onTransferCoins(this.props.currContact, this.state.amount)
        }
        this.props.history.push('/home')
    }



    render() {
        return (
            <div className="transfered-area">
                <h3>transfered coins to {this.props.currContact.name}</h3>

                <label htmlFor="name">Amount:</label>

                <input className="editInput" required type="text" id="amount" value={this.amount} onChange={this.handleChange} name="amount" />

                <button onClick={this.onTransfer}>Transfer</button>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        currContact: state.contactReducer.currContact,
        currUser: state.userReducer.user,
    }
}

const mapDispatchToProps = {
    getContactById,
    onTransferCoins,
}

export const TransferFund = connect(mapStateToProps, mapDispatchToProps)(_TransferFund)