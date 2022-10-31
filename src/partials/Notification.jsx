import React from 'react';

const Notification = (props) => {
    let message, style, icon;

    if (props.status === 'success') {
        message = props.message;
        style = {
            color: 'green'
        }
        icon = '✅';
    }

    if (props.status === 'danger') {
        message = props.message;
        style = {
            color: 'red'
        }
        icon = '❌';
    }

    return (
        <p style={style}>
            {icon} { message } 
        </p>
    )
}

export default Notification