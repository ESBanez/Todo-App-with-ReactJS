import { useState } from "react";

function NewTaskInput(props) {
  const [task, setTask] = useState('');

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    props.addTask(task);
    setTask('');
  }

  function handleTextChange(e) {
    setTask(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={handleTextChange}
        onKeyDown={handleKeyPress} // Handle the key press event
        placeholder="write a task here..."
      />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        Add Task
      </button>
    </>
  );
}

export default NewTaskInput;
