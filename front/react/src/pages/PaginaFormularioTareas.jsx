import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { crearTareas , borrarTareas , editarTareas , unaTarea } from "../api/Tarea.api";
import { useNavigate , useParams } from "react-router-dom";


export function PaginaFormularioTareas() {
  const{ register,handleSubmit,setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);


  const onSubmit = handleSubmit(async data =>{
    if(params.id){
      await editarTareas(params.id,data)}
      else{
    await crearTareas(data);

  }
  navigate("/tarea")})

  useEffect(() =>{
    async function cargarTarea(){
      if (params.id){
        const res = await unaTarea(params.id);
        setValue('titulo',res.data.titulo)
        setValue('descripcion',res.data.descripcion)
      }
    }
    cargarTarea()
  },[])

    return (
      <div>
        <form onSubmit={onSubmit}>
      <input type="text"
       placeholder="Titulo"
       {...register("titulo", { required:true })} />

  <input type="text" 
          
       placeholder="Descripcion"
       {...register("descripcion", { required:true })} />
     
      <button>guardar💾</button>
      <button onClick={navigate('/tarea')}>volver a la lista🔙</button>
        </form>


      {params.id && (
        <button onClick={async () =>{
          const aceptar =window.confirm("seguro?");
          if(aceptar){
            await borrarTareas(params.id);
            navigate("/tarea");
          }
        }}>
          borrar🗑️
        </button>
      )}

      </div>
    )
  }