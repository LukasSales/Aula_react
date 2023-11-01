import styles from './Header.module.css';

import logo from '../assets/rocket.svg'

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={logo} alt="logo" />
                <strong className={styles.to}>to</strong>
                <strong className={styles.do}>do</strong>

            </header>

        </div>
    );
}