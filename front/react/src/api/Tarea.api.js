import axios from "axios";


const tareasApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tareas/tasks/tasks/',
});

export const unaTarea = (id) => tareasApi.get(`/${id}/`);

export const conseguirTareas = () => tareasApi.get("/");

export const crearTareas = (tarea) => tareasApi.post("/", tarea);
    
export const borrarTareas = (id) => tareasApi.delete(`/${id}`);

export const editarTareas = (id,tarea) => tareasApi.put(`/${id}/`,tarea);