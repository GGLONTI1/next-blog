import React from 'react'
import styles from "./loginPage.module.css"

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div href="/" className={styles.socialButton}>Sign in with Google</div>
                <div href="/" className={styles.socialButton}>Sign in with Github</div>
                <div href="/" className={styles.socialButton}>Sign in with Facebook</div>
            </div>
        </div>
    )
}

export default LoginPage