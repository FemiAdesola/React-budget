import Income from './Components/Income';
import Expenses from './Components/Expenses';
import Target from './Components/Target';
import Balance from './Components/Balance';
import './App.css';

function App() {
  return (
    <div className='Main'>
        <div className="App">
          <Income incomeAmount={0} incomeSource={''} incomeDate={undefined} id={0}  />
          <Expenses />
          <Target/>
      </div>
      <Balance />
    </div>
  );
}

export default App;
