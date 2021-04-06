
import { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../../services/contactService.js'
import editLogo from '../../assets/icon/edit.png'
import backLogo from '../../assets/icon/back.png'

import './ContactDetailsPage.scss'

export class ContactDetailsPage extends Component {

    state = {
        contact: null
    }

    componentDidMount = () => {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }


    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    async onDeleteContact(contactId) {
        console.log('delete', contactId);
        await contactService.deleteContact(contactId)
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading contact.....</div>
        return (
            <div className="contactDetails">
                <h1>Contact Details Page:</h1>
                <img className="contactImg" src={`https://robohash.org/${contact._id}`} alt="" />
                <p>{contact._id}</p>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <div className="btn-container">
                    <button onClick={() => this.onDeleteContact(contact._id)}>Delete contact</button>
                    <Link to={'/contact/edit/' + contact._id}><img src={editLogo} alt=""/></Link>
                    <Link to='/contact'><img src={backLogo} alt=""/></Link>
                </div>
            </div>
        )
    }
}
