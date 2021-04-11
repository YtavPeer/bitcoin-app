
import { Component } from 'react'

import './MoveList.scss'

export class MoveList extends Component {

    render() {
        return (
            <div>
            <h1>move list comp</h1>
            {
                this.props.moves && this.props.moves.map(move => <div key={move.id}> <small>To {move.to}</small>  <small>at {move.at}</small>  <small>amount {move.amount}</small> </div>)
            }
            </div>
        )
    }
}

