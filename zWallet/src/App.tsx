import { useState } from "react";
import "./App.css";
import AddButton from "./components/AddButton/AddButton";
import AddKeyForm from "./components/AddKeyForm/AddKeyForm";
import KeyItem from "./components/KeyItem/KeyItem";
import SelectedKeyView from "./components/SelectedKeyView/SelectedKeyView";
import keys from "./global/keys";

function App() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  return (
    <div className="parent">
      <div className="child1">
        <div className="keyListMenu">
          <ul className="menu">
            {keys.map((key) => (
              <div
                onClick={() => {
                  setName(String(key.name));
                  setType(String(key.type));
                }}
              >
                <KeyItem name={key.name} type={key.type} />
              </div>
            ))}
          </ul>
        </div>

        <div onClick={() => setShow(true)} className="buttonContainer">
          <AddButton />
        </div>
      </div>

      <div className="child2">
        <SelectedKeyView name={name} type={type} />
      </div>

      {show ? (
        <div className="formBackground">
          {" "}
          <button className="closeButton" onClick={() => setShow(false)}>
            close
          </button>
          <AddKeyForm />{" "}
        </div>
      ) : null}
    </div>
  );
}

export default App;
