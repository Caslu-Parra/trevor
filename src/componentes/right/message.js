export default function Message(props) {
    const dtEnvio = new Date(props.dtEnvio)
    const side = props.owner === 'trevor' ? 'left' : 'right'
    return (
        <div className="position-relative">
            <div className="chat-messages p-4">

                <div className={`chat-message-${side} pb-4`}>
                    <div>
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png"
                            className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                        <div className="text-muted small text-nowrap mt-2">{dtEnvio.getHours()}:{dtEnvio.getMinutes()}</div>
                    </div>
                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">Você</div>
                        {props.children}
                    </div>
                </div>

            </div>
        </div>
    )
}