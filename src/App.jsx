import "./App.css";
import { useState } from "react";
import TaskCard from "./TaskCard";
import Popup from "./Popup";

function App() {
  const [tabName, setTabName] = useState("My Tasks");
  function switchTasks(e) {
    document.querySelectorAll(".radioLabel").forEach((element) => (element.className = "radioLabel"));
    setTabName(e.target.value);
    e.target.parentElement.className += " dark-bg";
  }
  return (
    <>
      <div className="wholeContent">
        <h1 className="appName center-text">To do list</h1>
        <h2 className="tabName center-text">{tabName}</h2>
        <div className="tapControl">
          <label htmlFor="myTasks" className="radioLabel dark-bg">
            <input type="radio" id="myTasks" className="tabSwitcher" checked={tabName == "My Tasks"} value={"My Tasks"} onChange={switchTasks} />
            My Tasks
          </label>
          <label htmlFor="completedTask" className="radioLabel">
            <input type="radio" id="completedTask" className="tabSwitcher" checked={tabName == "Completed Tasks"} value={"Completed Tasks"} onChange={switchTasks} />
            Completed Tasks
          </label>
        </div>
        <button className="addTask">Add New Task</button>
        <div className="takGrid">
          <TaskCard
            taskName="Clean Computer"
            taskLabel={[
              { name: "Urgent", color: "#4493f8" },
              { name: "Not Urgent", color: "red" },
            ]}
          />
        </div>
      </div>
      <Popup />
    </>
  );
}

export default App;
