import React from 'react';
import {ReactComponent as User} from "../../assets/User.svg";
import {ReactComponent as Basket} from "../../assets/Basket.svg";
import styles from './LoginsStyles.module.scss'

const Login = () => {


    return (
        <div className={styles.wrapper__login}>
            <div className={styles.pointer}>
                <User className={styles.user_icon}/>
            </div>
            <div className={styles.line}></div>
            <div className={styles.pointer}>
                <Basket className={styles.basket_icon}/>
            </div>
        </div>
    );
};

export default Login;