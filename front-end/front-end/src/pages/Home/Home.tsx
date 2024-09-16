import imgLogo from './logo.png';
import styles from './Home.module.css'

export default function Home () {
    return(
        <>
        <div className={styles.content}>
            <h3>Faça seu plano</h3>
            <h1>Cote seu <span>seguro auto na Porto Seguro</span></h1>
            <p>Veja nossos planos da <strong>Porto Seguro</strong> auto na Porto Seguro</p>
            <img src={imgLogo} />
        </div>
        </>
    )
}