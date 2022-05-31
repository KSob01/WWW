import {GetQuoteHTTP} from "./QuotesGet";
import QuoteFrame from "./QuoteFrame";

export default function RandQuote({faker}) {
    const s = GetQuoteHTTP(`/rand?id=${faker}`)
    return (
        <>
            {s.map((val) =>
                <QuoteFrame key={val['id']} quote={val}/>
            )}
        </>

    )
}
