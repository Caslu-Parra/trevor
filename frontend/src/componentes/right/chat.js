import 'primeicons/primeicons.css';
import { SpeedDial } from 'primereact/speeddial';
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import trevorImg from '../../img/trevor-02.png';
import './speedDial.css';
import { saveRoteiro, saveHistorico } from '../../endPoints/saveClient';

export default function Chat(props) {
    const toast = useRef(null);
    const items = [
        {
            label: 'Salvar',
            icon: 'pi pi-save custom-icon',
            command: async () => {
                try {
                    // Coletar todas as informações do formulário em uma variável local
                    const formData = {
                        cityName: props.cityName,
                        departureDate: props.departureDate,
                        returnDate: props.returnDate,
                        tripType: props.tripType,
                        travelWithKids: props.travelWithKids,
                        travelAlone: props.travelAlone,
                        travelWithPets: props.travelWithPets,
                        budget: props.budget,
                        obsViagem: props.obsViagem
                    };

                    // Salvar os dados na tabela historico
                    const savedHistorico = await saveHistorico(formData);
                    console.log('Dados do histórico salvos com sucesso:', savedHistorico);

                    // Preparar os dados para salvar na tabela log_roteiros
                    const logData = {
                        res_message: props.geminiResponse,
                        dt_exeo: new Date().toISOString(),
                        id_historico: savedHistorico.id // Usar o ID do histórico salvo
                    };

                    // Salvar os dados na tabela log_roteiros
                    const savedLogData = await saveRoteiro(logData);
                    console.log('Log salvo com sucesso:', savedLogData);

                    toast.current.show({ severity: 'info', summary: 'Salvar', detail: 'Roteiros salvos!' });
                } catch (error) {
                    console.error('Erro ao salvar os dados:', error);
                    toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar os roteiros!' });
                }
            }
        },
        {
            label: 'Refazer',
            icon: 'pi pi-refresh custom-icon',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Refazer', detail: 'Novos roteiros sendo gerados!' });
            }
        }
    ];

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
                </div>
            </div>
            <div>
            </div>
            {props.children}
            <div style={{ position: 'relative', height: '150px' }}>
                <Toast ref={toast} />
                <div style={{
                    position: 'absolute',
                    right: '1rem',
                    bottom: '1rem',
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#076df2',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: -1
                }}></div>
                <SpeedDial 
                    model={items} 
                    direction="up" 
                    style={{ 
                        position: 'absolute', 
                        right: '1rem', 
                        bottom: '1rem',
                        zIndex: 1
                    }} 
                    buttonStyle={{ 
                        background: "#076df2", 
                        color: "white", 
                        border: "none", 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%' 
                    }} 
                    className="custom-speed-dial"
                />
            </div>
        </div>
    );
}