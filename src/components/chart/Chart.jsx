import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className='chart'>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <h3 className="chart__title">{title}</h3>
                <LineChart data={data}>
                    <XAxis dataKey='name' stroke='#5550bd' />
                    <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='7 7' />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
