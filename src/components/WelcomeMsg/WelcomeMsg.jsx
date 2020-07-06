import React from 'react';
import styles from './WelcomeMsg.module.css';

const WelcomeMsg = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>WELCOME USER!!</h1>
        </div>
    )
}

export default WelcomeMsg;