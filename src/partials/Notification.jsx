import React from 'react';

const Notification = (props) => {
    if (props.status == 'success') {
        var message = props.message;
        var style = {
            color: 'green'
        }
        var icon = '✅';
    }

    // Create Danger
    if (props.status == 'danger') {
        var message = props.message;
        var style = {
            color: 'red'
        }
        var icon = '❌';
    }

    return (
        <p style={style}>
            {icon} { message } 
        </p>
    )
}

export default Notification