import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Registrar.module.css';

import imgLogo from './logo-fundo.png'

function Registrar() {
    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <img src={imgLogo} alt="Porto Seguro" />
            </div>
            <div className={styles.formSection}>
                <h1>Registrar</h1>
                <form>
                    <label htmlFor="email">Endereço de Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />

                    <Link to="/" className={styles.submitButton}>Registrar</Link>

                    <Link to='/login' className={styles.submitRegistrar}>Já tem conta? <span>Entre aqui</span></Link>
                </form>
            </div>
        </div>
    );
}

export default Registrar;
