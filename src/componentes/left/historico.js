
export default function Historico(props) {
    return (
        <div className="col-12 col-sm-5 col-lg-4 col-xl-3 border-right">
            <div className="px-4 d-none d-md-block">
                <h1 className="h5 mt-4">Historico de Roteiros</h1>

                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <input type="text" className="form-control my-3" placeholder="Pesquisar..." />
                    </div>
                </div>
            </div>
            {props.children}
            <hr className="d-block d-lg-none mt-1 mb-0" />
        </div>
    )
}