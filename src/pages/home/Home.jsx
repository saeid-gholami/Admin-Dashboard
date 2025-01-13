import React from 'react';
import './Home.css';
import Features from '../../components/features/Features';
import Chart from '../../components/chart/Chart';
import { xAxisData } from '../../datas';
import Widgetsm from '../../components/widgetsm/Widgetsm';
import Widgetlg from '../../components/widgetlg/Widgetlg';

export default function Home() {
    return (
        <div className='home'>
            <Features />
            <Chart data={xAxisData} title='Sales Performance' dataKey='sale' grid />
            <div className='widgets'>
                <Widgetsm />
                <Widgetlg />
            </div>
        </div>
    )
}
