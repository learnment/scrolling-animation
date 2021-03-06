import styles from './Container.module.scss';

export default function Container({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.bg}></div>
            {children}
        </div>
    );
}
