import React from 'react';

export default function Range({ id, min, max, step, value, onChange }) {
    return (
        <div className="form-group">
            <label htmlFor={id}>Quanto você pretende gastar?</label>
            <input
                type="range"
                id={id}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                style={{ width: '100%' }} 
                className="form-range" 
            />
            <p>Valor por pessoa: R${value}</p>
        </div>
    );
}