import "./KeyItem.css";

type Props = {
  name: String;
};
function KeyItem({ name }: Props) {
  return (
    <div className="keyItem">
      <div className="keyData">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default KeyItem;
