import RandQuote from "../../components/rand-quote";
import {pageHeader} from "../../styles/styles.module.css"
export default function QuoteOfTheDay(){
    return(
        <>
            <title>Random quote</title>
            <h1 className={pageHeader}>
                Random Quote
            </h1>
            <RandQuote/>
        </>

    )
}