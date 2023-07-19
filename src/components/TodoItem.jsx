import { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handleRemove() {
    props.removeTask(props.taskId);
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          id={props.taskId}
          checked={isChecked}
          onChange={handleCheck}
        />
        <label htmlFor={props.taskId}>
          <span
            className={isChecked ? "task-name completed" : "task-name"}
          >
            {props.taskName}
          </span>
        </label>
        {isChecked && (
          <button className="btn btn-outline-dark ms-auto" onClick={handleRemove}>
            Remove
          </button>
        )}
      </div>
    </>
  );
}

export default TodoItem;
