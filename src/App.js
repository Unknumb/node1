
import './App.css';
//react-router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//importar componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//importar paginas 
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (

  //Se va visualizar en todas las paginas


  <Router>

    <Navbar />

    <Routes>
      <Route path='/' element={<Home />}> </Route>
      <Route path='/nosotros' element={<About />}> </Route>
    </Routes>
  </Router>
  );
}

export default App;
