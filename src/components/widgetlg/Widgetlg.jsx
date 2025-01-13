import React from 'react';
import './Widgetlg.css';
import { transactions } from '../../datas';

export default function Widgetlg() {
    const [transactionsData, setTransactionsData] = React.useState(transactions);
    const Button = ({ type }) => {
        return <button className={'widgetlg__button ' + type}>{type}</button>
    }
    return (
        <div className='widgetlg'>
            <h3 className="widgetlg__title">Latest Transactions</h3>
            <table className='widgetlg__table'>
                <thead>
                    <tr className="widgetlg__tr">
                        <th className="widgetlg__th">Customer</th>
                        <th className="widgetlg__th">Date</th>
                        <th className="widgetlg__th">Amount</th>
                        <th className="widgetlg__th">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id} className='widgetlg__tr'>
                            <td className='widgetlg__user'>
                                <img src={transaction.img} className='widgetlg__img' />
                                <span className='widgetlg__name'>{transaction.customer}</span>
                            </td>
                            <td className='widgetlg__date'>{transaction.date}</td>
                            <td className='widgetlg__amount'>${transaction.amount}</td>
                            <td className='widgetlg__status'>
                                <Button type={transaction.status} />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
