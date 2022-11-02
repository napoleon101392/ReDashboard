import React from 'react';

const Alert = (props) => {
    return (
        <div className={`alert alert-${props.status} shadow-lg`}>
            <div>
                <span>{ props.children }</span>
            </div>
        </div>
    )
}

export default Alert