import { BitcoinPreview } from '../BitcoinPreview';
import './BitcoinList.scss'

export const BitcoinList = ({contacts, onSelectContact}) => {

    return (
        <div>
            {
                contacts && contacts.map(contact => <BitcoinPreview key={contact._id} contact={contact} />)
            }
        </div>
    )
}

