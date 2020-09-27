import React, { useState } from 'react';
import './css/Login.css';
import logo from '../images/amazonlogo.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
    //a way to change browser path/ see line 17 and/or 25(history.push('/')) and firebase.js
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
            .catch(error => alert(error.message))

    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log("created")
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className="login__logo" src={logo} />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__signin-btn" onClick={signIn} type="submit">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Aamazon clone conditions of Use & sale.  Please see out Privacy Notice, our Cookies notice and our interest-based Ads notice.
                </p>
                <button className="login__reg-btn" onClick={register} type="submit">Create your Account</button>
            </div>
        </div>
    )
}

export default Login;
