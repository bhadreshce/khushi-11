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
import Head from './custom-hook/Head';
import { Routes, Route } from 'react-router-dom';
import Main from './custom-hook/Main';
import Contact from './custom-hook/Contact';
import About from './custom-hook/About';
import Pattern from './custom-hook/Try';
function App() {
  return (
    <>

      <Head />
      <Pattern rows={5} />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
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
      {/* <Layout /> */}
    </>
  );
}

export default App;
