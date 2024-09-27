import '../App.css';
import React from 'react';

function InputText (props){
    return (
        <div id={props.id}>
            <input type='text' placeholder={props.children}/>
        </div>
    )
}

export default InputText;