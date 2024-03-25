import { Task } from "./Task";

import "../App.css";

export function Tasks({ taskList, setTasksList, setFire}) {
  return (
    <div className="tasksList">
      {taskList.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>There is no tasks to show</h3>
      ) : (
        taskList.map((task) => (
          <Task
            key={task.id}
            uid={task.id}
            title={task.name}
            color={task.color}
            setTasksList={setTasksList}
            taskList={taskList}
            setFire={setFire}
          />
        ))
      )}
    </div>
  );
}
