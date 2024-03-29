import React from "react";
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyDown}) => {
    return(
        <div className="form">
            <input value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}></input>
            <div className="create-button"
            onClick={onCreate}>
                add
            </div>
        </div>
    )
}

export default Form;