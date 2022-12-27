/* eslint-disable */

import React from "react";
import keys from "../keys";
import "./AddKeyForm.css";

function AddKeyForm() {
    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const [show, setShow] = React.useState(false);

    const addKey = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        keys.push(
            {
                name: name,
                type: type
            }
        );
    }
    return (
        <div className="KeyFormDiv">
            <p className="Title">Add a key</p>
            <form className="CreateKeyForm" onSubmit={addKey}>
                <div>
                    <label>Key Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Key Type</label>
                    <input
                        type="text"
                        id="type"
                        value={type}
                        onChange={event => setType(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" onClick={() => setShow(true)}>Create Key</button>
                </div>
                {
                    show?<div>Created!</div>:null
                }
            </form>
        </div>
    );
}

export default AddKeyForm
