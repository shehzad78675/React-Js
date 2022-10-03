import React, { useContext } from 'react';
import TransactionContext from '../TransactionContext';

function History() {
  const transaction = useContext(TransactionContext);
  return (
    <div>
        <h2 className='heading2'>History</h2>
        <hr />
        {transaction[0].map((transaction, index)=>(

        <div className='history' key={index} style={{borderRight: `${transaction.amount < 0 ? '4px solid red' : '4px solid green'}`}}>
            <p>{transaction.text}</p>
            <p>{transaction.amount < 0 ? `-$${-1 * transaction.amount}` : `+$${transaction.amount}`}</p>
        </div>
        ))}
    </div>
  )
}

export default History