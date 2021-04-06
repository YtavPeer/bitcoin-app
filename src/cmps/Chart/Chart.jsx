
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './Chart.scss'

export const Chart = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <Sparklines data={props.data}>
                    <SparklinesLine color="red" />
           </Sparklines>

        </div>
    )
}

