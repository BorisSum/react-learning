import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
        <img className={styles.header_logo} alt = '1' src='./logo.svg'></img>
        <span>{props.pip}</span>
        </header>
    );
};

export default Header;