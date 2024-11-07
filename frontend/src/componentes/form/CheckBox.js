import './CheckBox.css';

export default function CheckBox(props) {
    return (
        <div id={props.id}>
            <label>
                <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={(e) => props.onChange(e.target.checked)}
                />
                {props.label}
            </label>
        </div>
    );
}