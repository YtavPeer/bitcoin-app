
import { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { contactService } from '../../services/contactService.js'
import editLogo from '../../assets/icon/edit.png'
import backLogo from '../../assets/icon/back.png'
import { getContactById, removeContact } from '../../store/actions/contactActions'
import { MoveList } from '../../cmps/MoveList'
import { TransferFund } from '../../cmps/TransferFund'

import './ContactDetailsPage.scss'
class _ContactDetailsPage extends Component {

    componentDidMount = () => {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    async loadContact() {
        await this.props.getContactById(this.props.match.params.id)
        // const contact = await contactService.getContactById(this.props.match.params.id)
        // this.setState({ contact })
    }

    async onDeleteContact(contactId) {
        console.log('delete', contactId);
        this.props.removeContact(contactId);
        this.props.history.push('/contact')
    }

    render() {
        const { currContact, history, currUser, contactMove } = this.props
        if (!currContact) return <div>Loading contact.....</div>
        return (
            <div className="contactDetails">
                <h1>Contact Details Page:</h1>
                <img className="contactImg" src={`https://robohash.org/${currContact._id}`} alt="" />
                <p>{currContact._id}</p>
                <p>{currContact.name}</p>
                <p>{currContact.email}</p>
                <p>{currContact.phone}</p>
                <div className="btn-container">
                    <button onClick={() => this.onDeleteContact(currContact._id)}>Delete contact</button>
                    <Link to={'/contact/edit/' + currContact._id}><img src={editLogo} alt="" /></Link>
                    <Link to='/contact'><img src={backLogo} alt="" /></Link>
                </div>
                <TransferFund currContact={currContact} history={history} />
                <MoveList currContact={currContact} moves={contactMove} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        currContact: state.contactReducer.currContact,
        currUser: state.userReducer.user,
        contactMove: state.userReducer.user.moves.filter(move => move.toId === state.contactReducer.currContact._id)
    }
}

const mapDispatchToProps = {
    getContactById,
    removeContact
}

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage)