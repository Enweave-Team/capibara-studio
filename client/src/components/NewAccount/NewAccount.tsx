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

    function sendInfo(e:React.ChangeEvent<HTMLInputElement>) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });

    }
    return (
        <div className='wrapper__newAccount'>
            <header>
                <img src="" alt="logo"/>
                <h1>Create your account</h1>
            </header>

            <form>
                <div className='initials-form'>
                    <div className='initials-form__content'>
                        <p>First Name</p>
                        <input onChange={sendInfo} name='firstName' className='initials-form__input' type="text" placeholder='Enter your first name...'/>
                    </div>

                    <div className='initials-form__content'>
                        <p>Last Name</p>
                        <input onChange={sendInfo} name='lastName' className='initials-form__input' type="text" placeholder='Enter your last name...'/>
                    </div>
                </div>

                <div className='email-form'>
                    <p>Email</p>
                    <input onChange={sendInfo} name='email' className='email-form__input' type="text" placeholder='Enter your email...'/>
                </div>

                <div className='password-form'>
                    <p>Password</p>
                    <input onChange={sendInfo} name='password' className='password-form__input' type="password" placeholder='Enter your password...'/>
                </div>

                <button onClick={() => registrationActions(info)}>Submit</button>
            </form>

            <footer>
                <p>Contact</p>
                <p>Terms of Service</p>
                <p>Privacy policy</p>
            </footer>
        </div>
    );
};

export default NewAccount;