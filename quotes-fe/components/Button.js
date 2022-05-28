import styles from "../styles/Home.module.css";

export default function Button({onPress, value}) {
    return (
        <button type="button" onClick={onPress} className={styles.card}>
            {value}
        </button>
    )
}