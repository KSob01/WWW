
import {GetQuoteHTTP} from "../../components/Quotes.module";

export default function Quotes() {
    const s= GetQuoteHTTP( "/quote/1")
    return (
        <>
            {s['quote']}{s['author']}
        </>
    )
}
