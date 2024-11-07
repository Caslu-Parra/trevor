import React from 'react';
import './DatePicker.css';

export default function DatePicker({ id, value, onChange, children }) {
    return (
        <div>
            <label htmlFor={id}>{children}</label>
            <div className="date-picker-container">
                <span className="calendar-icon">📅</span>
                <input
                    type="date"
                    className="date-input"
                    id={id}
                    name="trip-start"
                    min="1900-01-01"
                    max="2099-12-31"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}