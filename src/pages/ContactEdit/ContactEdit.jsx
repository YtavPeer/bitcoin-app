
import { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../../services/contactService'
import backLogo from '../../assets/icon/back.png'
import { connect } from 'react-redux'
import { saveContact } from '../../store/actions/contactActions'

import './ContactEdit.scss'

class _ContactEdit extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        try {
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
            console.log('contact is', contact)
            this.setState({ contact })
        } catch (error) {
            console.log('robot not found')
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        console.log('contact is:', this.state.contact);
        this.props.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }


    render() {
        if (!this.state.contact) return <h1>robot not found</h1>
        const { name, phone, email } = this.state.contact
        return (
            <form className='contact-edit' onSubmit={this.onSaveContact}>
                <label htmlFor="name">Name</label>
                <input className="editInput" required type="text" id="name" value={name} onChange={this.handleChange} name="name" />

                <label htmlFor="phone">Phone</label>
                <input className="editInput" required type="text" id="phone" value={phone} onChange={this.handleChange} name="phone" />

                <label htmlFor="email">Email</label>
                <input className="editInput" required type="text" id="email" value={email} onChange={this.handleChange} name="email" />

                <div className="btn-container">
                    <button>Save Contact</button>
                    <Link to='/contact'><img src={backLogo} alt="" /></Link>
                </div>

            </form>
        )
    }
}



const mapDispatchToProps = {
    saveContact
}

export const ContactEdit = connect(null, mapDispatchToProps)(_ContactEdit)
