import React, {useState} from 'react';
import './NewAccount.scss';
import {registrationActions} from "../../Actions/RegistrationActions";

const NewAccount = () => {

    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    function sendInfo(e: React.ChangeEvent<HTMLInputElement>) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });

    }

    return (
        <div className='wrapper__newAccount'>
            <div className='header'>
                <img src="" alt="logo"/>
                <h1>Create your account</h1>
            </div>

            <form className='form'>
                <div className='initials-form'>
                    <div className='form__content'>
                        <p>First Name</p>
                        <input onChange={sendInfo} name='firstName' className='initials-form__input' type="text"
                               placeholder='Enter your first name...'/>
                    </div>

                    <div className='form__content'>
                        <p>Last Name</p>
                        <input onChange={sendInfo} name='lastName' className='initials-form__input' type="text"
                               placeholder='Enter your last name...'/>
                    </div>
                </div>

                <div className='email-password-form'>
                    <div className='form__content'>
                        <p>Email</p>
                        <input onChange={sendInfo} name='email' className='email-form__input' type="text"
                               placeholder='Enter your email...'/>
                    </div>

                    <div className='form__content'>
                        <p>Password</p>
                        <input onChange={sendInfo} name='password' className='password-form__input' type="password"
                               placeholder='Enter your password...'/>
                    </div>
                </div>

                <div>
                <input type="checkbox"/>By proceeding, you agree to the <span style={{color: '#000'}}>Terms of Service</span>
                <button className='form-button' onClick={() => registrationActions(info)}><h3>Create account</h3></button>
                </div>
            </form>

            <div className='footer'>
                <p>Contact</p>
                <p>Terms of Service</p>
                <p>Privacy policy</p>
            </div>
        </div>
    );
};

export default NewAccount;