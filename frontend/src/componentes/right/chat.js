import 'primeicons/primeicons.css';
import { SpeedDial } from 'primereact/speeddial';
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import trevorImg from '../../img/trevor-02.png';
import './speedDial.css';
import { saveRoteiro, saveHistorico } from '../../endPoints/saveClient';

export default function Chat({ formData, geminiResponse, children }) {
    const toast = useRef(null);
    const items = [
        {
            label: 'Salvar',
            icon: 'pi pi-save custom-icon',
            command: async () => {
                try {
                    // Salvar histórico
                    const historicoData = {
                        dt_ida: formData.departureDate,
                        dt_volta: formData.returnDate,
                        nome_destino: formData.cityName,
                        tipo_viagem: formData.tripType,
                        viajando_sozinho: formData.travelAlone,
                        tem_animal: formData.travelWithPets,
                        valor_pessoa: formData.budget,
                        obs_viagem: formData.obsViagem,
                        tem_crianca: formData.travelWithKids
                    };
                    const savedHistorico = await saveHistorico(historicoData);

                    // Salvar roteiro
                    const roteiroData = {
                        msg: geminiResponse,
                        dt_exeo: new Date().toISOString(),
                        id_historico: savedHistorico.id
                    };
                    await saveRoteiro(roteiroData);

                    toast.current.show({ severity: 'info', summary: 'Salvar', detail: 'Roteiros salvos!' });
                } catch (error) {
                    toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar os dados!' });
                    console.error('Erro ao salvar os dados:', error);
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
            {children}
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