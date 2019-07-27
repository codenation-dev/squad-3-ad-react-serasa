import React from 'react'

export default function ErrorMessage(props) {
    const { message } = props;
    return (
        <div>
            <span>{message}</span>
        </div>
    )
}
