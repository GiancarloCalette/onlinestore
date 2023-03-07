import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';

function App() {
  return (
    <div className="App">
      <h1>Hello from react</h1>
      <Navbar></Navbar>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
