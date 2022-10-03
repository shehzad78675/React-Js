import { useSelector } from 'react-redux';
import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';
import Theme from './features/theme/Theme';

function App() {
  const color = useSelector((state) => state.theme.color);
  return (
    <div className="App" style={{color: `${color}`}}>
       <Counter/>
       <Coin/>
       <Theme/>
    </div>
  );
}

export default App;
