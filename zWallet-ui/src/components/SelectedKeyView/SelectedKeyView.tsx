import { useEffect, useState } from "react";
import { deleteKey, getKey, Key } from "../../API";
import "./SelectedKeyView.css";

type Props = {
  id: number
  keys: Key[]
  setKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>
};
function SelectedKeyView({ id, setKeys, keys }: Props) {
  const [key, setKey] = useState<Key>()
  useEffect(() => {
    getKey(id).then(res => {
      setKey(res.data)
    })
  }, [id])

  return (
    <div className="container">
      {key == null ? (
        <h1>select a key</h1>
      ) : (
        <div className="keyView">
          <h1>Name: {key.name}</h1>
          <h1>Amount: {key.amount}</h1>
          <h1>Value: {key.value}</h1>
          <button onClick={() => {deleteKey(id).then(res => {
            setKey(undefined)
            setKeys(keys.filter((value)=> value.id !== id))
          }
            )}}>
            Delete key
          </button>
        </div>
      )}
    </div>
  );
}

export default SelectedKeyView;
