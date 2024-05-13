import logo from './logo.svg';
import './App.css';
import ThemeContext from './ThemeContext';
import Header from './Header';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Header />
        <Home />
      </ThemeContext>
    </div>
  );
}

export default App;
