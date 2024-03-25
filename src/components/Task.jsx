import { DoneIcon, DeleteIcon, UndoIcon } from "./Icons";
import "../App.css";
import { useState } from "react";

export function Task({ uid, title, color = "white" , setTasksList, taskList, setFire}) {
  
  const tt = taskList.find(task => task.id === uid);
  const doneState = tt.done;

  const [done, setDone] = useState(doneState);
  
  const handleDone = () => {
    setFire(!done)
    setDone((prevState) => !prevState)
    
    const indexTask = taskList.findIndex(task => task.id === uid);
    taskList[indexTask].done = !doneState

    localStorage.setItem("tasks", JSON.stringify(taskList));
  }

  return (
    <>
      {done ? (
        
        <div
        
          className="task"
          style={{
            border: `3px solid #070816`,
            transition: ".3s",
            textDecoration: "line-through",
            color : "#FFFFFF4c"
          }}
        >
          
          <p>{title}</p>
          <div>
            <button onClick={handleDone} className="doneButton">
            {done ? <UndoIcon /> : <DoneIcon />}
            </button>
            <button className="deleteButton"  onClick={() => {
              const newTasks = taskList.filter(task => task.id !== uid);
              setTasksList(newTasks)
              
            }}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      ) : (
        <div className="task" style={{ border: `3px solid ${color}` }}>
          <p>{title}</p>
          <div>
            <button onClick={handleDone} className="doneButton">
             {done ? <UndoIcon /> : <DoneIcon />}
            </button>
            <button className="deleteButton" onClick={() => {
              const newTasks = taskList.filter(task => task.id !== uid);
              setTasksList(newTasks)
            }}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
