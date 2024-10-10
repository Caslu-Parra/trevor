
import 'primeicons/primeicons.css';
        
import trevorImg from '../../img/trevor-02.png';

export default function Chat(props) {
    return (
        <div className="col-12 col-sm-7 col-lg-8 col-xl-9">
            <div className="py-2 px-4 border-bottom"> 
                <div className="d-flex align-items-center">
                    <div className="position-relative">
                        <img src={trevorImg} className="rounded-circle mr-1" alt="Logomarca assistente Trevor" width="60" height="60" />
                    </div>
                    <div className="flex-grow-1 pl-3">
                        <strong>Trevor</strong>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-lg mr-1 px-3">
                        <i className="pi pi-save" style={{ fontSize: '1.5rem' }}></i>   
                        </button>
                        <button className="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block">
                        <i className="pi pi-sync" style={{ fontSize: '1.5rem' }}></i>
                        </button>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}