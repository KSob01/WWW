import {button} from '../styles/styles.module.css'
export default function Button({onPress, value}) {
    return (
        <button type="button" onClick={onPress} className={button} >
            {value}
        </button>
    )
}