import { useEffect,useState } from "react";
import { conseguirTareas } from "../api/Tarea.api";
import { ItemsTareas } from "./ItemsTareas";





export function ListadeTareas() {
    const [tarea,setTarea] = useState([])

    useEffect(() =>{
       async function cargarTareas(){
            const res = await conseguirTareas();
            setTarea(res.data);
        }
        cargarTareas();
    },[])


  return (
    
    <div className="tarea-formulario">
        {tarea.map(tarea => (
            <ItemsTareas key={tarea.id} tarea={tarea} />
            
        )

        )}
        
    </div>
  )
}


