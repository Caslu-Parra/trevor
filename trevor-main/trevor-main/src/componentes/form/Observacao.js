import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import './Observacao.css'; // Importe seu arquivo CSS se necessário

export default function AutoResizeDemo() {
    const [value, setValue] = useState('');

    return (
        <div>
            <label htmlFor="observacao">Observações:</label>
            <div className="card flex justify-content-center">
                <InputTextarea
                    autoResize
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={5}
                    cols={30}
                    placeholder="Digite suas observações aqui"
                    style={{ minHeight: '100px', width: '100%' }} // Ajuste a altura mínima e largura
                    className="observacao-input" // Classe para estilização adicional, se necessário
                />
            </div>
        </div>
    );
}
