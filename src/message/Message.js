// Iteration 5 - Bonus

import React from 'react';
import 'bulma/css/bulma.css';

const Message = props => {
    return (
        <article class="message is-info">
            <div class="message-header">
                <p>{props.messageTitle}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {props.messageDescription}
                <strong>{props.messageStrong}</strong>
            </div>
        </article>
    );
};

export default Message;