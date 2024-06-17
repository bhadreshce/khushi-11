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
import Local from './Local/Local';
import Reducer from './Local/Reducer';
import Dog from './Local/Dog';
import Layout from './Local/Layout';
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
      {/* <Parent /> */}
      {/* <Local /> */}
      {/* <Reducer /> */}
      {/* <Dog /> */}
      <Layout />
    </div>
  );
}

export default App;
