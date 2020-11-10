import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import Signup from './signup/Signup';
import CoolButton from './coolbutton/CoolButton';
import Message from './message/Message';
import 'bulma/css/bulma.css';

//<Navbar/> for Iteration 1

const App = () => {
  return (
    <div>
      <Navbar className="button is-rounded my-class is-danger is-small" buttonName="Login"
        className2="button is-small is-success" buttonName2="Signup"
      />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <Navbar className="button is-rounded my-class is-danger is-small" buttonName="Login"
        className2="button is-small is-success" buttonName2="Signup"
      />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <FormField label="Password" type="password" placeholder="********"/>
      <CoolButton className="button is-small is-success" buttonName="Submit"/>
      <Message messageTitle='Hello World' messageDescription= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 
        messageStrong="Pellentesque risus mi"
      />
    </div>
  );
};

export default App;
