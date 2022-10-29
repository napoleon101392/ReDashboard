import React from 'react';

// TODO:: Create separate class to hold
// message, style, icon
export default function Notification(props) {
    // Create success
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