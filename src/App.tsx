import { useAppDispatch, useAppSelector } from './app/hooks';
import { increaseBy } from './slices/counter-slice';
import logo from './logo.svg';
import './App.css';

function App() {
  const state = useAppSelector((appState) => appState.counter);
  const dispatch = useAppDispatch();

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{`Count is ${state.value}`}</p>
        <button onClick={() => dispatch(increaseBy(3))}>Handle Add</button>
      </header>
    </div>
  );
}

export default App;
