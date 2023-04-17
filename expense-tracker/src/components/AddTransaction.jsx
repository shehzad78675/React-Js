import React, { useContext, useState } from 'react'
import TransactionContext from '../TransactionContext';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const transtaction = useContext(TransactionContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(text === '' || amount === ''){
      alert('Please enter text and amount');
      return;
    }
    transtaction[1]([
      ...transtaction[0],
      {
        text,
        amount
      }
    ]);

    setAmount('');
    setText('');
  }
  return (
    <div>
        <h2 className='heading2'>Add new transaction</h2>
        <hr />
        <form action="" onSubmit={handleSubmit}>
            <div className='inputFields'>

            <label htmlFor="text">Text</label>
            <input type="text" name='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...'/>
            </div>
            <div className='inputFields'>
                <label htmlFor="amount" style={{marginBottom: '-10px'}}>Amount</label>
                <p style={{marginBottom: '-3px'}}>(negative-expense, positive-income)</p>
                <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='0'/>
            </div>

            <button type='submit'>Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction