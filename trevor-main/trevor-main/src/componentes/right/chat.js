
import 'primeicons/primeicons.css';    
import trevorImg from '../../img/trevor-02.png';
import { SpeedDial } from 'primereact/speeddial'; 
import { Toast } from 'primereact/toast'; 
import React, { useRef} from 'react'; 
import './SpeedDial.css';
export default function Chat(props) {
    const toast = useRef(null);
    const items= [
    {
        label: 'Save',
        icon: 'pi pi-save', 
        style:{ background:"#f2f2f2", fontSize: '1.2rem', border: '1 solid, white', padding: '10px'},
        command: () => {
            toast.current.show({summary: 'save', detail: 'Viagem salva' });
        }
    },
    {
        label: 'Refresh',
        icon: 'pi pi-sync', 
        style:{ background:"#f2f2f2", fontSize: '1.2rem', border: '1 solid, white', padding: '10px'},
        command: () => {
            toast.current.show({summary: 'Atualizado', detail: 'Viagem atualizada' });
        }
    }
    ]
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
                    <div className="speedDial">
                    <Toast ref={toast} />
                         <SpeedDial className='spdDial' model={items} direction="up" style={{ left: 'calc(90% - 0rem)', top:'calc(90% - 1rem, 1rem)',
                            bottom:0}} buttonStyle={{background: "#076df2", color: "white", border: "#076df2", padding: '15px', borderRadius: '50%',  }} />


                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
    
} 