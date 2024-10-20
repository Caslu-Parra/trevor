
export default function ComboBox(props) {
    return (
        <div id={props.id} className="form-group">
            <label htmlFor={props.id} className="d-block">{props.label}</label>
            <select
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                className="date-picker-container" // Classe Bootstrap para estilização
            >
                <option value="">Selecione</option>
                {props.options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
