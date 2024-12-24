import "./App.css";
import { useState } from "react";
import TaskCard from "./TaskCard";
import Popup from "./Popup";
import DropArea from "./DropArea";

function App() {
  const [popUpCheck, setPopUpCheck] = useState(false);
  const [tabName, setTabName] = useState("My Tasks");
  const [taskList, setTaskList] = useState([
    ["Doing Home work", [{ tagname: "Not urgent", color: "lightblue" }]],
    ["Grocery Shopping", [{ tagname: "Errand", color: "yellow" }]],
    ["Prepare for Exam", [{ tagname: "Urgent", color: "red" }]],
    ["Call the Doctor", [{ tagname: "Important", color: "orange" }]],
  ]);
  const [activeCard, setActiveCard] = useState(null);
  function onDragDrop(idx) {
    if (activeCard === null || activeCard === undefined) {
      return;
    }
    const taskToMove = taskList[activeCard];
    const updatedTask = taskList.filter((_, index) => index !== activeCard);
    updatedTask.splice(idx, 0, taskToMove); // Removed +1 to insert at correct position
    setTaskList(updatedTask);
    document.querySelectorAll(".dropArea").forEach((e) => (e.className = "hiddrop"));
  }
  let tasks = taskList.map((element, index) => {
    return (
      <div key={index}>
        <TaskCard taskName={element[0]} taskLabel={element[1]} setActiveCard={setActiveCard} idx={index} />
        <DropArea onDrop={() => onDragDrop(index + 1)} />
      </div>
    );
  });
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
        {tabName === "My Tasks" ? (
          <div>
            <button className="addTask" onClick={() => setPopUpCheck(true)}>
              Add New Task
            </button>
            <div className="takGrid">{tasks}</div>
          </div>
        ) : (
          <p>Complete Task</p>
        )}
      </div>
      {popUpCheck && <Popup setTaskList={setTaskList} setPopUpCheck={setPopUpCheck} />}
    </>
  );
}

export default App;
