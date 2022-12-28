import "./KeyItem.css";

type Props = {
  name: String;
  type: String;
};
function KeyItem({ name, type }: Props) {
  return (
    <div className="keyItem">
      <p className="keyData">Name: {name}</p>
      <p className="keyData">Type: {type}</p>
    </div>
  );
}

export default KeyItem;
