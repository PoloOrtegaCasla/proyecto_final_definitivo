import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { PaginaTareas } from "./pages/PaginaTareas";
import { PaginaFormularioTareas } from "./pages/PaginaFormularioTareas";
import { Navegacion } from "./components/navegacion";
import { Formulario } from "./pages/login";
import './App.css'


function App(){
  return(
    <BrowserRouter>
    <Navegacion/>
    <Routes>
      <Route path="/" element={<Navigate to="/formulario" />}/>
      <Route path="/tarea" element={<PaginaTareas/>}/>
      <Route path="/creartarea" element={<PaginaFormularioTareas/>}/>
      <Route path="/tarea/:id" element={<PaginaFormularioTareas/>}/>
      <Route path='/formulario' element={<Formulario/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App