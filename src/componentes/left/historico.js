export default function Historico(props) {
    return (
        <div className="col-12 col-sm-5 col-lg-4 col-xl-3 border-right">
            <div className="px-4">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <button 
                            type="button" 
                            className="btn btn-primary w-100 my-3" // Margem vertical usando my-3
                            data-toggle="modal" 
                            data-target="#exampleModal"
                        >
                            Novo Roteiro
                        </button>
                    </div>
                </div>
                <h1 className="h5 mt-4">Histórico de Roteiros</h1>
            </div>
            {props.children}
            <hr className="d-block d-lg-none mt-1 mb-0" />
        </div>
    )
}