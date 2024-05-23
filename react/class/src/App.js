import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Todo from './Todo';
import { useEffect, useState } from 'react';
function App() {
  // useEffect(() => { 

  // },[])
  //   hoisting 
  // what is difference beetween rest operator spreed operator
  const [count, setCount] = useState(3)
  return (
    <div className="App">
      {/* <button onClick={() => {
        setCount(count + 3)
      }}>Props Chnge</button>
      <Demo value={count} /> */}
      <Todo />
    </div>
  );
}

export default App;
