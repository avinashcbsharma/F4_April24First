import React, { useState } from 'react';
import './App.css';
const RegistrationForm = () => {
let [email, setEmail] = useState('');
let [password, setPassword] = useState('');
let [confirmPassword, setConfirmPassword] = useState('');
let [emailValid, setEmailValid] = useState(false);
let [passwordValid, setPasswordValid] = useState(false);
let [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

const validateEmail = (email) => {
const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return check.test(String(email).toLowerCase());
};

const manage_EmailChange = (e) => {
setEmail(e.target.value);
setEmailValid(validateEmail(e.target.value));
};

const manage_PasswordChange = (e) => {
setPassword(e.target.value);
setPasswordValid(e.target.value.length >= 8);
};

const manage_ConfirmPasswordChange = (e) => {
setConfirmPassword(e.target.value);
setConfirmPasswordValid(e.target.value === password);
};

const manage_Submit = (e) => {
e.preventDefault();
if (emailValid && passwordValid && confirmPasswordValid) {
    alert('Form submitted successfully');
} else {
    alert('Form cannot be submited!');
}
};

return (        
    <form onSubmit={manage_Submit}>
    <label for="mail">Email:</label>
    <input id="mail"
        type="email"
        value={email}
        onChange={manage_EmailChange}
        style={{ borderColor: emailValid ? 'green' : 'red' }}
    />
    {!emailValid && <p>Invalid email format.</p>}
    <label for="pws">Password:</label>
    <input id="pws" 
        type="password"
        value={password}
        onChange={manage_PasswordChange}
        style={{ borderColor: passwordValid ? 'green' : 'red' }}
    />
    {!passwordValid && <p>Password must be at least 8 characters</p>} 
    <label for="conpws">Confirm Password:</label>
    <input id="conpws"
        type="password"
        value={confirmPassword}
        onChange={manage_ConfirmPasswordChange}
        style={{ borderColor: confirmPasswordValid ? 'green' : 'red' }}
    />
    {!confirmPasswordValid && <p>Passwords do not match</p>}
    <div id="btn">
    <button type="submit">Sign Up</button>
    </div>
    </form>
);
};    
export default RegistrationForm;