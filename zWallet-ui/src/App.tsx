import { useEffect, useState } from "react";
import { getKeys, Key } from "./API";
import "./App.css";
import AddButton from "./components/AddButton/AddButton";
import AddKeyForm from "./components/AddKeyForm/AddKeyForm";
import KeyItem from "./components/KeyItem/KeyItem";
import SelectedKeyView from "./components/SelectedKeyView/SelectedKeyView";

function App() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [keys, setKeys] = useState<Key[]>();

  useEffect(() => {
    getKeys().then( res => {
      setKeys(res.data)
      console.log(res.data)
    })
  }, [setKeys])
  return (
    <div className="parent">
      <div className="child1">
        <div className="keyListMenu">
          <ul className="menu">
            {keys ? keys.map((key) => (
              <div
                onClick={() => {
                  setId(key.id);
                }}
              >
                <KeyItem name={key.name}/>
              </div>
            )): null}
          </ul>
        </div>

        <div onClick={() => setShow(true)} className="buttonContainer">
          <AddButton />
        </div>
      </div>

      <div className="child2">
        <SelectedKeyView id={id} keys={keys ? keys: []} setKeys={setKeys}/>
      </div>

      {show ? (
        <div className="formBackground">
          {" "}
          <button className="closeButton" onClick={() => setShow(false)}>
            close
          </button>
          <AddKeyForm keys={keys ? keys: []} setKeys={setKeys}/>{" "}
        </div>
      ) : null}
    </div>
  );
}

export default App;
