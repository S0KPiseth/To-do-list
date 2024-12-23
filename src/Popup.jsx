import "./Popup.css";
function Popup() {
  return (
    <div className="popUpCard">
      <button className="closePopup">&#10006;</button>
      <h2>Add new Task</h2>
      <form action="">
        <div style={{ position: "relative" }}>
          <label htmlFor="not" className="taskNameLabel">
            Task name
          </label>
          <input
            type="text"
            name=""
            id="not"
            onFocus={() => (document.querySelector(".taskNameLabel").className += " transformTNL")}
            onBlur={(e) => {
              e.target.value === "" && (document.querySelector(".taskNameLabel").className = "taskNameLabel");
            }}
          />
        </div>
        <div className="tagContent">
          <div className="tagGrid">
            <p>Add tag</p>
          </div>
          <input type="color" name="" id="colorTag" />
        </div>
        <div className="inputField">
          <label htmlFor="description">Description:</label>
          <textarea name="" id="description"></textarea>
        </div>

        <div className="buttonDiv">
          <button className="buttonPopUp" id="done">
            Done
          </button>
        </div>
      </form>
    </div>
  );
}
export default Popup;
