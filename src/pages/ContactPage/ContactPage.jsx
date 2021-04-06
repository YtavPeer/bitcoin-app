import { Link } from 'react-router-dom'
import { Component } from 'react'
import { contactService } from '../../services/contactService.js'
import { BitcoinList } from '../../cmps/BitcoinList'
import { ContactDetailsPage } from '../../pages/ContactDetailsPage'
import { BitcoinFilter } from '../../cmps/BitcoinFilter'
import addLogo from '../../assets/icon/plus.png'

import './ContactPage.scss'

export class ContactPage extends Component {

    state = {
        contacts: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }


    render() {
        const { contacts, selectedContactId } = this.state
        if (!contacts) return <h1>Loading...</h1>
        return (
            <div>
                <BitcoinFilter onChangeFilter={this.onChangeFilter} />
                <Link to='/contact/edit'><img src={addLogo} alt=""/> </ Link>
                <BitcoinList contacts={contacts} />
            </div>
        )
    }
}
