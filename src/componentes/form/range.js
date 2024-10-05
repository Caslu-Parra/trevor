export default function Range(props) {
    return (
        <div className="form-group">
            <label for={props.id}>{props.children}</label>
            <input type="range" className="form-control-range" id={props.id} min='0' max='10' step='2'/>
        </div>
    )
}