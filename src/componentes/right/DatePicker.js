export default function DatePicker(props) {
    return (
        <div className="Date">
            <p>{props.children}</p>
            <input type="date" id={props.id} name="trip-start" min="1900-01-01"
             max="2099-12-31"/>
        </div>
    );
}