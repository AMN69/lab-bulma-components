//Iteration 3

import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = props => {
    return  (
        <button className={props.className}>{props.buttonName}
        </button>
    );
};

export default CoolButton;