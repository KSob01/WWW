import {GetQuoteHTTP} from "../QuotesGet";
import QuoteFrame from "../styles";

export default function Quote({id}) {
    const s = GetQuoteHTTP(`/quote/${id}`)
    return (
        <QuoteFrame>
            <>
                {s['quote']}
                <br/>
                {s['author']}
            </>

        </QuoteFrame>
    )
}
