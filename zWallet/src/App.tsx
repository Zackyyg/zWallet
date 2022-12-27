import { useState } from "react";
import "./App.css";
import AddKeyButton from "./components/AddKeyButton";
import "./components/AddKeyButton.css";
import AddKeyForm from "./components/AddKeyForm";
import KeyItem from "./components/KeyItem";
import keys from "./keys";

type key = {
  name: String;
  type: String;
};

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="parent">

      <div className="child1">

        <div className="KeyListMenu">
          <ul className="Menu">
            {keys.map((key) => (
              <div onClick={() => openKeyView(key)}>
                <KeyItem name={key.name} type={key.type} />
              </div>
            ))}
          </ul>
        </div>

        <div onClick={() => setShow(true)} className="buttonContainer">
          <AddKeyButton />
        </div>
      </div>

      <div className="child2">
        <div className="KeyView">select a key</div>
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

function openKeyView(key: key) {}

export default App;
