import styles from './Section.module.scss';

export default function Section({ step, children }) {
    return (
        <div className={styles.section}>
            <div className={styles.title}>{children}</div>
        </div>
    );
}
