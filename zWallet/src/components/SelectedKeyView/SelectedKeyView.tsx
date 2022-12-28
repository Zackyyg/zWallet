import "./SelectedKeyView.css";

type Props = {
  name: String;
  type: String;
};
function SelectedKeyView({ name, type }: Props) {
  return (
    <div className="container">
      {name === "" ? (
        <h1>select a key</h1>
      ) : (
        <div className="keyView">
          <h1>Name: {name}</h1>
          <h1>Type: {type}</h1>
        </div>
      )}
    </div>
  );
}

export default SelectedKeyView;
