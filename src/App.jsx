import "./App.css";
import { useEffect, useState } from "react";
import { Tasks } from "./components/Tasks";
import { Form } from "./components/Form";
import Filter from "./components/Filter";
import { Header } from "./components/Header";


function App() {
  //lista y seteo de lista de tareas, llamada al localStorage para recuperar tareas guardadas
  const [taskList, setTaskList] = useState([]);
  const [fire, setFire] = useState(true);


  //Setiar en localStorage

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      const items = JSON.parse(data).filter(task => task.done === false)
      setTaskList(items)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList, fire]);

  //lista de tareas filtradas segun el filtro (este que es el que se renderiza)
  const [filtered, setFiltered] = useState("all");

  //filtrar lista taskList   ----   Cambiar a un componenente aparte   ----
  const filteredItems = taskList.filter((task) => {
    if (filtered === "done") {
      return task.done === true;
    } else if (filtered === "pending") {
      return task.done === false;
    } else {
      return task;
    }
  });

  return (
    <div className="App">
      
      <Header />
      <Form setTasksList={setTaskList} taskList={taskList} />
      <Filter filtered={filtered} setFiltered={setFiltered} />
      <Tasks
        setTasksList={setTaskList}
        taskList={filteredItems}
        setFire={setFire}
      />
      
    </div>
  );
}

export default App;
