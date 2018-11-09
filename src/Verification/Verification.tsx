import * as React from 'react';

const verification = (props:any) => {
    return (
        <div>
            {
                props.inputLength > 5 ?
                <p>Text is fine!</p> :
                <p>Text too short!</p>
            }
        </div>
    )
};

export default verification;