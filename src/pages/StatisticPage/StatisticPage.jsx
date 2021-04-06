
import { Component } from 'react'
import { Chart } from '../../cmps/Chart'
import { bitcoinService } from '../../services/bitcoinService.js'

import './StatisticPage.scss'

export class StatisticPage extends Component {

    state = {
        marketPrice: null,
    }

    componentDidMount() {
        this.loadMarketPrice()
    }

    async loadMarketPrice() {
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ marketPrice })
    }

    getMarketPriceValues(){
        const values = this.state.marketPrice.values.map(value => value.y)
        return values
    }

    render() {
        const { marketPrice } = this.state
        if(!marketPrice) return <h1>Chart Loading...</h1>
        return (
            <div>
                <h1 className="statistic-title">Statistic page:</h1>
                <Chart title={marketPrice.name} description={marketPrice.description} data={this.getMarketPriceValues()} color={'red'} />
            </div>
        )
    }
}
