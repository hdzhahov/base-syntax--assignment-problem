import React from 'react';

const userInput = (props) => {
    let style = {
        display: 'block',
        width: '200px',
        margin: '10px',
        marginTop: '10px',
        paddingLeft: '15px',
        height: '25px',
        fontSize: '20px'
    };

    return (
        <input style={style} onChange={props.updateHandler} type="text" placeholder={props.username} />
    );
}

export default userInput;
