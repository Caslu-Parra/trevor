import React from 'react';
import ReactDOM from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function DatePicker(props) {
    return (
        <div className="Date">
            <p>{props.children}</p>
            <input type="date" id={props.id} name="trip-start" min="1900-01-01"
             max="2099-12-31"/>
        </div>
    );
}

export default DatePicker