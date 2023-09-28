import { useNavigate } from "react-router-dom";
import '../estilo/listaestilo.css'

export function ItemsTareas({ tarea }) {

  const navigate = useNavigate()

  return (
            <div id="myDIV"  >
              <ul id="myUL"><li>
                <h1 className="h1tareas" >{tarea.titulo} </h1>
                <p>{tarea.descripcion}</p>
                <button className="tarea-boton" onClick={() =>{
              navigate('/tarea/' + tarea.id)
            }}>Editar✏️/borrar🗑️</button>
            <input type="checkbox" className="checkbox" />completado
            </li></ul>
                <hr />
               <div/>
            </div>
            
  )

}

