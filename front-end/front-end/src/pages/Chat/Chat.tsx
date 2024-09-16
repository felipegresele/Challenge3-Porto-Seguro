import React, { useState } from 'react';
import styles from './Chat.module.css';
import imgLogo from './bot.png';

export default function Chat() {
    // Estado para armazenar a mensagem do usuário
    const [message, setMessage] = useState('');
    // Estado para armazenar a mensagem a ser exibida
    const [userMessage, setUserMessage] = useState('');

    // Função para lidar com o clique no botão "Enviar"
    const handleSendMessage = () => {
        setUserMessage(message); // Atualiza a mensagem do usuário
        setMessage(''); // Limpa o campo de input
    };

    return (
        <div className={styles.content}>
            <h1>Chat 24 horas</h1>
            <div className={styles.chat}>
                <div className={styles.msg}>
                    <img src={imgLogo} alt="Bot" />
                    <p>Olá, como posso te ajudar?</p>
                </div>
                <div className={styles.usuario}>
                    <p className={styles.des}>{userMessage}</p>
                </div>
            </div>
            <div className={styles.bot}>
                <input type="text" placeholder="Digite sua mensagem aqui ..." value={message} onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Enviar ></button>
            </div>
        </div>
    );
}
