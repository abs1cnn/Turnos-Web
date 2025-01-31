import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar/Navbar'
import SeleccionServicios from './SeleccionServicios/SeleccionServicios'
import Servicio1 from './Servicio1/Servicio1';
import Servicio2 from './Servicio2/Servicio2';
import Especialidades from './Especialidades/Especialidades';
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
          <Route path="/Especialidades" element={<Especialidades />} />
          <Route path="/servicio4" element={<Servicio4 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
