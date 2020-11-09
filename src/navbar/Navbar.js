//Iteration 1 + 3 replacing CoolButton.js class in App.js here.

import React from 'react';
import 'bulma/css/bulma.css';
import Signup from '../signup/Signup';

const Navbar = props => {
    return (
        <nav className="navbar is-light">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span/>
            <span/>
            <span/>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
                Home
            </a>
            </div>

            <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">
                <p className="control">
                    <button className={props.className}>{props.buttonName}
                    </button>
                </p>
                <p className="control">
                    <button className={props.className2}>{props.buttonName2}
                        <a href="../signup/Signup.js"></a>
                    </button>
                </p>
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
