import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../page.module.css';
const Button = ({ name, submit }) => {
    return (
        <button type="button" className={styles.btn} onClick={submit}>{name}</button>
    )
}

export default Button