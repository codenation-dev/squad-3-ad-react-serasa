import React from 'react';

const ErrorMessage = props => {
    const { message } = props;
    return (
        <div>
            <span>{message}</span>
        </div>
    )
}

export default ErrorMessage;