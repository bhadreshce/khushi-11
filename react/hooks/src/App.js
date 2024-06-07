import logo from './logo.svg';
import './App.css';
import ThemeContext from './ThemeContext';
import Header from './Header';
import Home from './Home';
// import Memo from './Memo';
import Callback from './Callback';
import Form from './Form';
import Memo from './usememo/Memo';
import A from './props/A';
import Parent from './callback/Parent';
function App() {
  return (
    <div className="App">
      {/* <ThemeContext>
        <Header />
        <Home />
      </ThemeContext> */}
      {/* <Memo/> */}
      {/* <Callback /> */}
      {/* <Form /> */}
      {/* <Memo /> */}
      {/* <A /> */}
      <Parent />
    </div>
  );
}

export default App;
