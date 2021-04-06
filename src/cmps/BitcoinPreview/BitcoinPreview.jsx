import { Link } from 'react-router-dom'
import './BitcoinPreview.scss'

export const BitcoinPreview = ({ contact}) => {

    return (
        <Link to={'/contact/' + contact._id}>
            <div className="contact-preview">
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <div>
                    <p>{contact.name}</p>
                    <small>{contact.phone}</small>
                </div>
            </div>
        </Link>
    )
}

