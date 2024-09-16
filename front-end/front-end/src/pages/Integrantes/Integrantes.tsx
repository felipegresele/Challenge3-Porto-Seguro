import imgFelipe from './felipe.jpeg'
import imgArthur from './arthur.png'
import imgJohn from './john.png'
import styles from './Integrantes.module.css'

export default function Integrantes() {
    
    return(
        <div className={styles.content}>
            <h1 className={styles.titulo}>Integrantes</h1>
            <div className={styles.integrantes}>

                <div className={styles.integrante}>
                    <img src={imgFelipe} />
                    <div className='texto'>
                        <h1>Felipe Horta - RM556955</h1>
                    </div>
                </div>

                <div className={styles.integrante}>
                    <img src={imgArthur} />
                    <div className='texto'>
                        <h1>Arthur Cardoso Carinhanha - RM550615</h1>
                    </div>
                </div>

                <div className={styles.integrante}>
                    <img src={imgJohn} />
                    <div className='texto'>
                        <h1>João Henrique - RM556955</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}