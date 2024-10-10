import React from 'react';
import './DatePicker.css';

export default function DatePicker(props) {
    return (
        <div className="date-picker-container">
            <span className="calendar-icon">📅</span>
            <input
                type="date"
                className="date-input"
                id={props.id}
                name="trip-start"
                min="1900-01-01"
                max="2099-12-31"
            />
        </div>
    );
}
