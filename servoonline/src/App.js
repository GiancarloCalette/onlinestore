import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Home from './pages/home';
import About from './pages/about';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Cart from './pages/cart';
import Admin from './pages/admin';

function App() {
  return (
    <div className="App">
      <h1>Hello from react</h1>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/catalog' element={<Catalog></Catalog>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/' element={<Cart></Cart>}></Route>
            <Route path='/admin' element={<Admin></Admin>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
