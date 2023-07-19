import { useState } from "react";
import NewTaskInput from "./components/NewTaskInput";
import TodoItem from "./components/TodoItem";
import "./components/App.css";

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      taskName: "Do laundry",
    },
    {
      id: 2,
      taskName: "Clean Bedroom",
    },
  ]);

  const todoItemList = taskList.map((task) => (
    <TodoItem
      key={task.id}
      taskId={`todo-${task.id}`}
      taskName={task.taskName}
      removeTask={removeTask} // Pass the removeTask function here
    />
  ));

  function addTask(taskName) {
    const taskObj = {
      id: taskList.length + 1,
      taskName,
    };

    setTaskList([...taskList, taskObj]);
  }

  function removeTask(taskId) {
    setTaskList((prevTasks) =>
      prevTasks.filter((task) => task.id !== +taskId.split("-")[1])
    );
  }

  return (
    <div id="backgound101" style={{ backgroundImage: "url('https://e6wjnitftpz.exactdn.com/wp-content/uploads/2022/08/raidy_day_read-1024x576.jpg?strip=all&lossy=1&ssl=1')" }}>
      <div className="d-flex justify-content-center my-5">
        <div className="card my-5 px-5 py-5 shadow">
          <h1 className="text-center py-4 bx-3 shadow">
            <span className="text-warning">Todo</span> App in React{" "}
          </h1>
          <div className="container d-flex justify-content-center py-3">
            <NewTaskInput addTask={addTask} />
          </div>
          {todoItemList}
        </div>
      </div>
    </div>
  );
}

export default App;