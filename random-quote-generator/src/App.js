
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('')
  useEffect(() => {
    fetchAdvice();
    // console.log('use effect');
  }, []);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      setAdvice(response.data.slip.advice);
      // console.log('function');
    }).catch(error => {
      console.log(error);
    });
  }
  return (
    <div className="app">
      <div className="box">
        <p>{advice}</p>
        <button onClick={fetchAdvice}>GIVE ME ADVICE!</button>
      </div>
    </div>
  );
}

export default App;
