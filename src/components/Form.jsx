import { useState } from "react";
import { nanoid } from "nanoid";

import "../App.css";

export function Form({ setTasksList, taskList }) {
  const [task, setTask] = useState({
    id: `none`,
    name: "",
    done: false,
    color: "#000000",
  });
  const [error, setError] = useState(false);

  const [radioOption, setRadioOption] = useState("#c73d3b");

  const handleChangeRadio = (e) => {
    setRadioOption(e.target.value)
  };

  const handleChangeText = ({ target }) => {
    setTask({ name: target.value, done: false });
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = nanoid();

    if (e.target[0].value === "") {
      setError(true);
      return;
    } else {
      setTasksList([
        
        {
          id: id,
          name: e.target[0].value,
          done: false,
          color: radioOption,
        },...taskList
      ]);

      setTask({ name: "", done: false, color: "#FF0000" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeText}
          type="text"
          placeholder="Do the dishes, Take a break, ..."
          value={task.name}
          name="name"
        />
  <div className="form2">
    
        <div className="radio-container">
          <input
            type="radio"
            value="#c73d3b"
            id="radio-1"
            name="group"
            checked={radioOption === "#c73d3b"}
            onChange={handleChangeRadio}
          />
          <label htmlFor="radio-1" className="radio1"></label>
          <input
            type="radio"
            value="#3b7cc7"
            id="radio-2"
            name="group"
            checked={radioOption === "#3b7cc7"}
            onChange={handleChangeRadio}

          />
          <label htmlFor="radio-2" className="radio2"></label>
          <input
            type="radio"
            value="#15d160"
            id="radio-3"
            name="group"
            checked={radioOption === "#15d160"}
            onChange={handleChangeRadio}

          />
          <label htmlFor="radio-3" className="radio3"></label>
          <input
            type="radio"
            value="#d18f15"
            id="radio-4"
            name="group"
            checked={radioOption === "#d18f15"}
            onChange={handleChangeRadio}

          />
          <label htmlFor="radio-4" className="radio4"></label>
        </div>

        <input type="submit" value="Add Task" />
  </div>
      </form>
      {error ? (
        <p style={{ color: "red" }}>Your task must have a title</p>
      ) : (
        <p style={{ opacity: "0" }}>.</p>
      )}
    </div>
  );
}
