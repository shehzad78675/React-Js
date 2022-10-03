import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './actions/index'

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
     <div className='container'>
        <h1>Increment / Decrement counter</h1>
        <h1>Using React and Redux</h1>

        <div className="quantity">
          <a className="quantity_minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
          <input className="quantity_input" name="quantity" readOnly type="text" value={myState}/>
          <a className="quantity_plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
        </div>
     </div>
  );
}

export default App;
