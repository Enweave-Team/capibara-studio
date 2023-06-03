import React from 'react';
import './Authentication.scss';

const Authentication = () => {
    return (
        <div className='authentication-wrapper'>
            <div className='authentication'>
                <h1>Вперше тут?</h1>
                <button>Реєстрація</button>
            </div>
            <form>
                <h1>Вхід</h1>
                <input type="text" placeholder='Електронна пошта'/>
                <input type="text" placeholder='Пароль'/>
                <button>Вхід</button>
                <p>Забули пароль?</p>
            </form>
        </div>
    );
};

export default Authentication;