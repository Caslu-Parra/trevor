import './CheckBox.css';

export default function CheckBox(props) {
    return (
        <div id={props.id}>
            <label>
                <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={props.onChange}
                />
                {props.label}
            </label>
        </div>
    );
}
