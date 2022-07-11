import './App.css';
import { useStore } from './store'

function App() {
  const counter = useStore(state => state.count)
  const increment = useStore(state => state.increment)
  const decrement = useStore(state => state.decrement)
  return (
    <div className="App">
      <button onClick={decrement}>decrement</button>
       the count is {counter}
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
