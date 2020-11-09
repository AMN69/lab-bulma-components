// Iteration 4

import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton';

const Signup = () => {
    return (
        <div className='field'>
            <Navbar className="button is-rounded my-class is-danger is-small" buttonName="Login"
                className2="button is-small is-success" buttonName2="Signup"
            />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <FormField label="Password" type="password" placeholder="********"/>
            <CoolButton className="button is-small is-success" buttonName="Submit"/>
        </div>
    );
}

export default Signup;