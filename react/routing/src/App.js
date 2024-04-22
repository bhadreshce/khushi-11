import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/    ' element={<Contact />}></Route >

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
