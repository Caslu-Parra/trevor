export default function InputText(props) {
    return (
        <div id={props.id}>
            <label>
              Qual lugar você pretende visitar? 
            </label>
            <input
                type='text'
                className="card flex justify-content-center"
                placeholder={props.children}
                value={props.value}
                onChange={props.onChange}
                style={{ width: '100%', padding: '6px', fontSize: '16px' }} 
            />
        </div>
    );
}