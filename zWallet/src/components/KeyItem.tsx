import "./KeyItem.css";

type Props = {
    name: String;
    type: String;
}
function KeyItem({name, type}: Props){
    return(
        <div className="KeyItem">
            <p>Name: {name}</p>
            <p>Type: {type}</p>
        </div>
    );
}

export default KeyItem;
