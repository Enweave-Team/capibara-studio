import React, {useState} from 'react';
import './NewAccount.scss';
import {useForm, SubmitHandler} from "react-hook-form";
import {DataType, registrationActions} from "../../Actions/RegistrationActions";
import formErrors from "../../common/FormErrors";
import Button from "../../components/Button/Button";


const NewAccount = () => {

    const [info, setInfo] = useState({
        nameAcc: '',
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
        <div className='wrapper__newAcc'>
            <div className='form-wrapper'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Реєстрація</h1>
                <div className='form-field-wrapper'>
                <input
                    {...register('nameAcc', {required: true})}
                    type="text"
                    onChange={sendInfo}
                    placeholder='Ім’я'
                />
                <div className='errors-message'><span>{errors.nameAcc && formErrors.nameAcc}</span></div>
                </div>
                <div className='form-field-wrapper'>
                <input
                    {...register('email', {required: true})}
                    type="text"
                    onChange={sendInfo}
                    placeholder='Електронна пошта'
                />
                <div className='errors-message'><span>{errors.nameAcc && formErrors.nameAcc}</span></div>
                </div>
                <div className='form-field-wrapper'>
                <input
                    type="text"
                    onChange={sendInfo}
                    placeholder='Пароль'
                />
                <div className='errors-message'><span>{errors.nameAcc && formErrors.nameAcc}</span></div>
                </div>
                <div className='submit-div'>
                    <input type="checkbox"/><span>Запам’ятати мене</span>
                    <Button text='Реєстрація'/>
                </div>
            </form>
            </div>
            <div className='login'>
                <h1>Вже маєте обліковий запис?</h1>
                <button onClick={() => registrationActions(info)}>Увійти</button>
            </div>
        </div>
    );
};

export default NewAccount;