import * as React from 'react';

const verification = (props: any) => {
    const style = {
        border: '1px black solid',
    }

    return (
        <div style={style}>
            {
                props.inputLength > 5 ?
                <p>Text is fine!</p> :
                <p>Text too short!</p>
            }
        </div>
    )
};

export default verification;