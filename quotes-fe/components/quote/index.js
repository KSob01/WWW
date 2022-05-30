import {GetQuoteHTTP} from "../QuotesGet";
import {quoteFrame} from '../../styles/styles.module.css'
import QuoteFrame from "../QuoteFrame";

export default function Quote({id}) {
    const s = GetQuoteHTTP(`/quote/${id}`)
    return (
        <QuoteFrame quote={s}/>
    )
}
