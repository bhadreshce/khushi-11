import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
           <Route path='/contact' element={ <Contact/>} ></Route>
        </ >
      </BrowserRouter>
    </div>
  );
}

export default App;
