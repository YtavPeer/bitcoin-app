import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { BitcoinList } from '../../cmps/BitcoinList'
import { BitcoinFilter } from '../../cmps/BitcoinFilter'
import addLogo from '../../assets/icon/plus.png'
import { loadContacts } from '../../store/actions/contactActions'

import './ContactPage.scss'

class _ContactPage extends Component {

    state = {
        filterBy: null,
    }

    componentDidMount() {
        this.props.loadContacts(this.state.filterBy)
    }

    async loadContacts() {
        // this.props.loadContacts()
        // // const contacts = await contactService.getContacts(this.state.filterBy)
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.props.loadContacts(filterBy))
    }


    render() {
        const { contacts, selectedContactId } = this.props
        if (!contacts) return <h1>Loading...</h1>
        return (
            <div>
                <BitcoinFilter onChangeFilter={this.onChangeFilter} />
                <Link to='/contact/edit'><img src={addLogo} alt="" /> </ Link>
                <BitcoinList contacts={this.props.contacts} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        contacts: state.contactReducer.contacts
    }
}

const mapDispatchToProps = {
    loadContacts,
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)