
export default function Roteiro(props) {
    return (
        <a href="#" className="list-group-item list-group-item-action border-0">
            <div className="badge bg-success float-right">5</div>
            <div className="d-flex align-items-start">
                <img src={props.img} className="rounded-circle mr-1" alt={props.title} width="40" height="40" />
                <div className="flex-grow-1 ml-3">
                    {props.title}
                    <div className="small">
                        <span className="fas fa-circle chat-online"></span>
                        {props.data}
                    </div>
                </div>
            </div>
        </a>
    )
}