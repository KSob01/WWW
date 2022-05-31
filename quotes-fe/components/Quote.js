import {GetQuoteHTTP} from "./QuotesGet";
import QuoteFrame from "./QuoteFrame";

export default function Quote({id}) {
    const s = GetQuoteHTTP(`/quote/${id}`)
    return (
        <QuoteFrame quote={s}/>
    )
}
