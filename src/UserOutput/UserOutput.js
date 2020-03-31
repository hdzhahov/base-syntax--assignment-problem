import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Current usename:</p>
            <p>{props.username}</p>
        </div>
    );
}

export default userOutput;
