import "./Popup.css";
import { useState } from "react";
function Popup({ setTaskList, setPopUpCheck }) {
  // initialize state variable
  const [tagArray, setTagArray] = useState([]);

  //create tags element
  const tags = tagArray.map((element, index) => {
    return (
      <span key={index}>
        <p style={{ backgroundColor: element.color }}></p>
        <p>{element.tagname}</p>
        <button>&#10006;</button>
      </span>
    );
  });

  function addTags(e) {
    if (e.key == "Enter" && tagArray.length < 3) {
      setTagArray((t) => [...t, { tagname: e.target.value, color: document.querySelector("#colorTag").value }]);
    }
  }

  function onSubmit() {
    //make sure that the tag array is not empty
    if (!(tagArray.length === 0)) {
      setTaskList((t) => [...t, [document.querySelector("#not").value, tagArray]]);
      document.getElementById("myForm").reset();
      setTagArray([]);
      setPopUpCheck(false);
    } else {
      document.querySelector("#inputTag").focus();
      document.querySelector("#inputTag").style.borderColor = "red";
    }
  }

  function onClose() {
    document.getElementById("myForm").reset();
    setTagArray([]);
    setPopUpCheck(false);
  }
  return (
    <div className="popUpCard">
      <button className="closePopup" onClick={onClose}>
        &#10006;
      </button>
      <h2>Add new Task</h2>
      <form action="" onSubmit={(e) => e.preventDefault()} id="myForm">
        <div style={{ position: "relative" }}>
          <label htmlFor="not" className="taskNameLabel">
            Task name
          </label>
          <input
            required
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
          <label className="tagGrid" htmlFor="inputTag">
            <div className="tagContainer">{tags}</div>
            <input
              type="text"
              name=""
              id="inputTag"
              onFocus={() => (document.querySelector(".addTag").className += " transformaAT")}
              onBlur={(e) => {
                document.querySelector(".tagContainer").childElementCount === 0 || (e.target.value === null && (document.querySelector(".addTag").className += "addTag"));
              }}
              onKeyDown={(e) => addTags(e)}
            />
            <p className="addTag">Add tag</p>
          </label>
          <input type="color" name="" id="colorTag" />
        </div>
        <div className="inputField">
          <label htmlFor="description">Description:</label>
          <textarea name="" id="description"></textarea>
        </div>

        <div className="buttonDiv">
          <input className="buttonPopUp" id="done" type="submit" value="Done" onClick={onSubmit} />
        </div>
      </form>
    </div>
  );
}
export default Popup;
