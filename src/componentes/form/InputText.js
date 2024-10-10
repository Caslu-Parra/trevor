export default function InputText(props) {
    return (
        <div id={props.id}>
            <label>
              Qual cidade voce vai? 
            </label>
            <input
                type='text'
                placeholder={props.children}
                style={{ width: '100%', padding: '0,5px', fontSize: '16px' }} 
            />
        </div>
    );
}