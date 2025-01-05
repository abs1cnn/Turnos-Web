import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar/Navbar'
import SeleccionServicios from './SeleccionServicios/SeleccionServicios'
import Servicio1 from './Servicio1/Servicio1';
import Servicio2 from './Servicio2/Servicio2';
import Servicio3 from './Servicio3/Servicio3';
import Servicio4 from './Servicio4/Sercicio4';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<SeleccionServicios />} />
          <Route path="/servicio1" element={<Servicio1 />} />
          <Route path="/servicio2" element={<Servicio2 />} />
          <Route path="/servicio3" element={<Servicio3 />} />
          <Route path="/servicio4" element={<Servicio4 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
