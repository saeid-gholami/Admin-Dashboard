import React from 'react';
import './Features.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Features() {
    return (
        <div className='features'>
            <div className="feature__item">
                <span className='feature__title'>Revanue</span>
                <div className="feature__content">
                    <span className='feature__money'>$2.415</span>
                    <span className="feature__rate">
                        -11.4 <ArrowDownwardIcon className='feature__icon negative' />
                    </span>
                </div>
                <span className="feature__footer">Compared to last month</span>
            </div>
            <div className="feature__item">
                <span className='feature__title'>Sale</span>
                <div className="feature__content">
                    <span className='feature__money'>$4.415</span>
                    <span className="feature__rate">
                        -1.4 <ArrowDownwardIcon className='feature__icon negative' />
                    </span>
                </div>
                <span className="feature__footer">Compared to last month</span>
            </div>
            <div className="feature__item">
                <span className='feature__title'>Cost</span>
                <div className="feature__content">
                    <span className='feature__money'>$2.225</span>
                    <span className="feature__rate">
                        +2.4 <ArrowUpwardIcon className='feature__icon' />
                    </span>
                </div>
                <span className="feature__footer">Compared to last month</span>
            </div>
        </div>
    )
}
