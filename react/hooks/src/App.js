import logo from './logo.svg';
import './App.css';
import ThemeContext from './ThemeContext';
import Header from './Header';
import Home from './Home';
import Memo from './Memo';
function App() {
  return (
    <div className="App">
      {/* <ThemeContext>
        <Header />
        <Home />
      </ThemeContext> */}
      <Memo/>
    </div>
  );
}

export default App;
