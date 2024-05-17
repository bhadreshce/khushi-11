import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import CartContext from './CartContext';
function App() {
  return (
    <CartContext>

        <div className="App">
      <Header />
      <Home/>
    </div>
    </CartContext>
  
  );
}

export default App;
