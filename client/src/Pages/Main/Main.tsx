import React from 'react';
import styles from './MainStyles.module.scss';
import Button from "../../components/Button/Button";

const Main = () => {
    return (
        <div className={styles.wrapper__main}>
            <h1><b>Capybara</b><span>studio</span></h1>
            <p>Великий спектр послуг для краси <br/> вашого тіла, здоров’я та для душі</p>
            <Button text='Замовити послугу'/>
        </div>
    );
};

export default Main;