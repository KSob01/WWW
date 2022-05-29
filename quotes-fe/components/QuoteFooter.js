import {footer} from '../styles/styles.module.css'
import Lines from "./Lines";

export default function QuoteFooter() {
    return (
        <>            <Lines/>
            <h1 className={footer}>
                Project - Katarzyna Sobczyszyn, June 2022
            </h1>
            <Lines/>
        </>
    )
}