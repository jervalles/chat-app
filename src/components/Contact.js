import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name}/>
        <div>
            <div className="name">{props.name}</div>
            <div className="status">
                <div className={props.online === "true" ? "status-online": "status-offline"}></div>
                <span className="status-text">{props.online}</span>
            </div>
        </div>
    </div>
    )};

export default Contact;

