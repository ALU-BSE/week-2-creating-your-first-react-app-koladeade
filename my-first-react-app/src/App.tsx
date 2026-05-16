import { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MyComponent title="Hello from MyComponent!" />
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

export default App;
