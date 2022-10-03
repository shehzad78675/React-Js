import { useContext, useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Amount from "./components/Amount";
import History from "./components/History";
import TransactionContext from "./TransactionContext";

function App() {
  const historyOfTransaction = useState([]);

  // const transaction = useContext(TransactionContext);

  const totalBalance = historyOfTransaction[0].reduce((sum, transaction)=> (
   parseFloat(transaction.amount) + sum
  ),0) 
  return (
    <div className="main-container">
      <TransactionContext.Provider value={historyOfTransaction}>

      <h1>Expense Tracker</h1>
      <div>

      <h3>YOUR BALANCE</h3>
      <h1 style={{marginTop: '-17px'}}>${totalBalance}</h1>
      </div>
      <div className="amount">
        <Amount type="income" />
        <hr />
        <Amount />
      </div>
      <AddTransaction/>
      <History/>
      </TransactionContext.Provider>
    </div>
  );
}

export default App;
