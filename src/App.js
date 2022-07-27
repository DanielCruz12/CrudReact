import { useState, useEffect } from "react";
import { TaskTable } from "./components/TaskTable";
import { Control } from "./components/Control";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  const [listarTareas, setListarTareas] = useState([]);
  const [descripcion, setDescripcion] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);

  //si no existe, se puede agregar
  const crearTareas = (nombreTarea) => {
    if (!listarTareas.find((task) => task.name === nombreTarea))
      setListarTareas([...listarTareas, { name: nombreTarea, done: false}]);
  };
  const crearDescripcion = (descrip) => {
    if (!descripcion.find((des) => des.text  === descrip))
      setDescripcion([...descripcion, {  text :descrip}]);
  };


  //se crea una copia 
  const ToggleTask = (task) => {
    setListarTareas(
      listarTareas.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data) {
      setListarTareas(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    let dat = localStorage.getItem("descripcion");
    if (dat) {
      setDescripcion(JSON.parse(dat));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(listarTareas));
  }, [listarTareas]);

  useEffect(() => {
    localStorage.setItem("descripcion", JSON.stringify(descripcion));
  }, [descripcion]);

  return (
    <div className="App">
      <TaskTable
        tasks={listarTareas}
        descripcion={descripcion}
        ToggleTask={ToggleTask}
        crearTareas={crearTareas}
        crearDescripcion={crearDescripcion}
      ></TaskTable>

      <Control setShowCompleted={setShowCompleted}></Control>

      {showCompleted === true && (
        <TaskTable
          tasks={listarTareas}
          descripcion={descripcion}
          ToggleTask={ToggleTask}
          showCompleted={showCompleted}
        ></TaskTable>
      )}
    </div>
  );
}

export default App;
