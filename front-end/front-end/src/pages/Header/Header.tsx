import styles from './Header.module.css';
import imgLogo from './logo-fundo.png';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className={styles.menuNav}>
            <img src={imgLogo} alt="Logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="menu_item">Início</Link>
                    </li>
                    <li>
                        <Link to="/planos" className="menu_item">Planos</Link>
                    </li>
                    <li>
                    <Link to="/chat" className="menu_item">Chat</Link>
                    </li>
                    <li>
                    <Link to="/faqs" className="menu_item">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/integrantes" className="menu_item">Integrantes</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.login}>
                <ul>
                    <li>
                        <Link to='/login' className='menu_item'>Entrar</Link>
                    </li>
                    <li>
                        <Link to='/registrar' className='menu_item'>Registrar</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
