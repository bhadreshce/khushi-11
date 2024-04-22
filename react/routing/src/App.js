import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Common from './Common';
import Mens from './Mens';
import Womens from './Womens';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/category' element={<Common />}>
            <Route path='/category/mens' element={<Mens />}></Route>
            <Route path='/category/womens/:id' element={<Womens />}></Route>
            <Route path='/category/womens' element={<Womens />}></Route>
          </Route>
          {/* <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route > */}

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
