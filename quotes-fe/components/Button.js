export default function Button({onPress, value}) {
    return (
        <button type="button" onClick={onPress} >
            {value}
        </button>
    )
}