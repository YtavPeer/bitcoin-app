
import { Component } from 'react'

import './BitcoinFilter.scss'

export class BitcoinFilter extends Component {

    state = {
        name: '',
        phone: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }

    render() {

        const { name, phone } = this.state
        return (
            <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
                <div>
                    <label htmlFor="model">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
                </div>

                <div>
                    <label htmlFor="maxBatteryStatus">phone</label>
                    <input type="text" id="phone" value={phone} name="phone" onChange={this.handleChange} />
                </div>

            </form>
        )
    }
}
