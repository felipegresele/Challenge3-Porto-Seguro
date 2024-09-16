import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

import imgLogo from './logo-fundo.png'

function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <img src={imgLogo} alt="Porto Seguro" />
            </div>
            <div className={styles.formSection}>
                <h1>Login</h1>
                <form>
                    <label htmlFor="email">Endereço de Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />

                    <Link to="/" className={styles.submitButton}>Entrar</Link>

                    <Link to='/registrar' className={styles.submitRegistrar}>Não tem conta ainda? <span>Registre-se aqui</span></Link>
                </form>
            </div>
        </div>
    );
}

export default Login;

