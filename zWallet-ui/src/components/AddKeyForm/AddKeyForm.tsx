/* eslint-disable */

import React from "react";
import { createKey, createKeyNew, Key } from "../../API";
import "./AddKeyForm.css";

type Props = {
  keys: Key[],
  setKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>
};
function AddKeyForm({ keys, setKeys }: Props) {
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(false);

  const addKey = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    value? createKey(name, value).then(res => {
      keys.push({
        id: res.data.id,
        name: res.data.name,
        type: res.data.type,
        value: res.data.value,
      });
      setKeys(keys)
    }) : createKeyNew(name).then(res => {
      keys.push({
        id: res.data.id,
        name: res.data.name,
        type: res.data.type,
        value: res.data.value,
      });
      setKeys(keys)
    });


  };
  return (
    <div className="keyFormDiv">
      <p className="Title">Add a key</p>
      <form className="CreateKeyForm" onSubmit={addKey}>
        <div>
          <label>Key Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Key value</label>
          <input
            type="text"
            id="value"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={() => setShow(true)}>
            Create Key
          </button>
        </div>
        {show ? <div>Created!</div> : null}
      </form>
    </div>
  );
}

export default AddKeyForm;
