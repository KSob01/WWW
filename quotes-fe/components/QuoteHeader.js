import {header} from '../styles/styles.module.css'
import Lines from "./Lines";

export default function QuoteHeader() {
    return (
        <>
            <Lines/>
            <h1 className={header}>
                Quotes
            </h1>
            <Lines/>
        </>
    )
}