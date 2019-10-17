import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        };
    }

    render() {
        return (
            <div className="Contact" onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline });
            }}>
                <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
                <div>
                    <div className="name">{this.props.name}
                    </div>
                    <div className="status">
                        <div className={this.state.online ? 'status-online' : 'status-offline'}>
                        </div>
                        <span className="status-text">{this.state.online ? "Online" : "Offline"}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

 /*
className={this.state.online ? 'status-offline' : ''}
onClick={event => {
    const newOnline = !this.state.online;
    this.setState({ online: newOnline });
}}
*/