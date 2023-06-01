import React, {useState} from 'react';
import './NewAccount.scss';
import {useForm, SubmitHandler} from "react-hook-form";
import {DataType, registrationActions} from "../../Actions/RegistrationActions";
import formErrors from "../../common/FormErrors";


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

    const onSubmit: SubmitHandler<DataType> = data => console.log(data);

    const {register, handleSubmit, formState: {errors}} = useForm<DataType>();

    return (
        <div className='wrapper__newAccount'>


            <form
                onSubmit={handleSubmit(onSubmit)}
                className='form'>
                <div className='header'>
                    <img src="" alt="logo"/>
                    <h1>Create your account</h1>
                </div>
                <div className='initials-form'>
                    <div className='initials-form-item'>
                        <div className='form__content'>
                            <p>First Name</p>
                            <input
                                {...register("firstName", {required: true})}
                                onChange={sendInfo}
                                name='firstName'
                                className='initials-form__input'
                                type="text"
                                placeholder='Enter your first name...'/>
                            <div className='error-massage'><span>{errors.firstName && formErrors.firstName}</span></div>
                        </div>

                        <div className='form__content'>
                            <p>Last Name</p>
                            <input
                                {...register("lastName", {required: true})}
                                onChange={sendInfo}
                                name='lastName'
                                className='initials-form__input'
                                type="text"
                                placeholder='Enter your last name...'/>
                            <div className='error-massage'><span>{errors.lastName && formErrors.lastName}</span></div>
                        </div>

                    </div>

                    <div className='email-password-form'>
                        <div className='form__content'>
                            <p>Email</p>
                            <input
                                {...register("email", {required: true})}
                                onChange={sendInfo}
                                name='email'
                                className='email-form__input'
                                type="text"
                                placeholder='Enter your email...'/>
                            <div className='error-massage'><span>{errors.email && formErrors.email}</span></div>
                        </div>
                        <div className='form__content'>
                            <p>Password</p>
                            <input
                                {...register("password", {required: true})}
                                onChange={sendInfo}
                                name='password'
                                className='password-form__input'
                                type="password"
                                placeholder='Enter your password...'/>
                            <div className='error-massage'><span>{errors.password && formErrors.password}</span></div>
                        </div>
                    </div>
                </div>
                <div className='form-createAccount'>
                    <input type="checkbox"/>By proceeding, you agree to the <span style={{color: '#000'}}>Terms of Service</span>
                    <div className='form-createAccount-item'>
                        <h3><strong>Have an account? <span style={{color: '#573FF1'}}>Sign in</span></strong></h3>
                        <button
                            className='form-button'
                            onClick={() => registrationActions(info)}
                        >
                            <h3>Create account</h3></button>
                    </div>
                </div>
            </form>

            <div className='footer'>
                <nav className='footer-links'>
                    <a href="" className='footer-links-item'>Contact</a>
                    <div className='footer-dash'/>
                    <a href="" className='footer-links-item'>Terms of Service</a>
                    <div className='footer-dash'/>
                    <a href="" className='footer-links-item'>Privacy policy</a>
                </nav>
            </div>
        </div>
    );
};

export default NewAccount;