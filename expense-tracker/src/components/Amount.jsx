import React, { useContext, useState } from 'react';
import TransactionContext from '../TransactionContext';

function Amount({type}) {
  const transaction = useContext(TransactionContext);
  // const [expense, setExpense] = useState(0);

  const expense = transaction[0].reduce((sum, transaction) => {
    return parseFloat(transaction.amount) < 0 ? parseFloat(transaction.amount) + sum : sum
  },0);

  const income = transaction[0].reduce((sum, transaction) => {
    return parseFloat(transaction.amount) < 0 ? sum : parseFloat(transaction.amount) + sum
  },0);

  
  return (
    <div>
        <h2 style={{color: `${type === 'income' ? 'green' : 'red'}`}}>{type === 'income' ? 'INCOME' : 'EXPENSE'}</h2>
        <p style={{textAlign: 'center', marginTop : '-15px'}}>{type === 'income' ? `+$${income}` : `-$${-1 * expense}`}</p>
    </div>
  )
}

export default Amount