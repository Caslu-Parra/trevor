import React from 'react';

function Observacao() {
    return (
        <div className="grid-item">
            <label htmlFor="observacao">Observações:</label>
            <textarea 
                id="observacao" 
                name="observacao" 
                rows="4" 
                cols="50" 
                placeholder="Deixe seu comentário aqui..."
            />
        </div>
    );
}

export default Observacao;
