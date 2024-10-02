export default function InputText(props) {
    return (
        <div id={props.id}>
            <input type='text' placeholder={props.children} />
        </div>
    )
}