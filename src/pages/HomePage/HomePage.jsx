
import { Component } from 'react'
import { userService } from '../../services/userService.js'
import { bitcoinService } from '../../services/bitcoinService.js'
import { MoveList } from '../../cmps/MoveList'
import './HomePage.scss'



export class HomePage extends Component {

    state = {
        loggedUser: null,
        bitcoinRate: null,
    }

    componentDidMount() {
        this.loadLoggedUser()
        this.loadBitcoinRate()
    }

    async loadLoggedUser() {
        const loggedUser = await userService.getUser()
        console.log('the logged user is', loggedUser)
        this.setState({ loggedUser })
    }

    async loadBitcoinRate() {
        const bitcoinRate = await bitcoinService.getRate()
        this.setState({ bitcoinRate })
    }


    render() {
        const { loggedUser, bitcoinRate } = this.state
        if (!loggedUser) return <h1>Loading...</h1>
        return (
            <>
                <div className="home-page">
                    <h1>Hello {loggedUser.name}</h1>
                    <h3>Coins {loggedUser.coins}</h3>
                    <h3>Btc {bitcoinRate}</h3>
                </div>
                <MoveList moves={loggedUser.moves} />
            </>
        )
    }
}
