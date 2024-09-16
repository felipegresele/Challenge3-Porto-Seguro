import { Link } from "react-router-dom";
import styles from './Planos.module.css';

// Importação das imagens
import imgCarro from './carro.png';
import imgMoto from './moto.png';
import imgCaminhao from './caminhao.png';

export default function Planos() {
    return (
        <div className={styles.content}>
            <h1 className={styles.titulo}>Nossos Planos</h1>
            <p className={styles.descricao}>A Porto Seguro oferece 3 tipos de planos:</p>
            <div className={styles.planos}>

                {/*Carro*/}
                <div className={styles.plano}>
                    <img src={imgCarro} alt="Seguro de Carro" className={styles.imagem} />
                    <div className={styles.descricaoPlano}>
                        <h2>Seguro Auto Carro</h2>
                        <p>Suporte completo e ideal para quem quer um seguro de carro, oferecendo proteção contra danos, roubo e assistência 24 horas.</p>
                        <button className={styles.btn}>Ver mais</button>
                    </div>
                </div>

                {/*Moto*/}
                <div className={styles.plano}>
                    <img src={imgMoto} alt="Seguro de Moto" className={styles.imagem} />
                    <div className={styles.descricaoPlano}>
                        <h2>Seguro Auto Moto</h2>
                        <p>Proteção especial para motocicletas, com cobertura para acidentes, roubos e assistência em emergências.</p>
                        <button className={styles.btn}>Ver mais</button>
                    </div>
                </div>

                {/*Caminhão*/}
                <div className={styles.plano}>
                    <img src={imgCaminhao} alt="Seguro de Caminhão" className={styles.imagem} />
                    <div className={styles.descricaoPlano}>
                        <h2>Seguro Auto Caminhão</h2>
                        <p>Seguro completo para caminhões, garantindo proteção para veículos comerciais e suas cargas contra diversos riscos.</p>
                        <button className={styles.btn}>Ver mais</button>
                    </div>
                </div>

            </div>

            <div className={styles.beneficios}>
                <div className={styles.beneficio}>
                    <h3>Cobertura para Acessórios</h3>
                    <p>Proteção adicional para acessórios do veículo, garantindo que seus itens extras estejam cobertos em caso de danos ou roubo.</p>
                </div>
                <div className={styles.beneficio}>
                    <h3>Guincho 24 Horas</h3>
                    <p>Serviço de guincho disponível a qualquer hora do dia, para ajudar em emergências e garantir que você nunca fique preso na estrada.</p>
                </div>
                <div className={styles.beneficio}>
                    <h3>Seguro contra Incêndio e Furto</h3>
                    <p>Proteção contra danos causados por incêndios e furtos, proporcionando uma cobertura completa para imprevistos.</p>
                </div>
            </div>
        </div>
    );
}
