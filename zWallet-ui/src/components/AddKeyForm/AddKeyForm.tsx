/* eslint-disable */

import React from "react";
import "./AddKeyForm.css";
declare var window: { localStorage: Storage };

type key = {
  id: number
  name: String;
  type: String;
}


type Props = {
  keys: key[],
  setKeys: React.Dispatch<React.SetStateAction<key[]>>,
};
function AddKeyForm({ keys, setKeys }: Props) {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [show, setShow] = React.useState(false);

  const addKey = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    keys.push({
      id: keys.length+1,
      name: name,
      type: type,
    });

    window.localStorage.setItem('keys', JSON.stringify(keys));
    setKeys(keys)
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
          <label>Key Type</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
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
