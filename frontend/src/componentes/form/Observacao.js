import React from "react";
import { InputTextarea } from "primereact/inputtextarea";
import './Observacao.css'; 

export default function Observacao({ value, onChange }) {
    return (
        <div>
            <label htmlFor="observacao">Observações:</label>
            <div className="card flex justify-content-center">
                <InputTextarea
                    autoResize
                    value={value}
                    onChange={onChange}
                    rows={5}
                    cols={30}
                    placeholder="Digite suas observações aqui"
                    style={{ minHeight: '100px', width: '100%' }} 
                    className="observacao-input"
                />
            </div>
        </div>
    );
}