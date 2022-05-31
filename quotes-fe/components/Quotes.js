import {GetQuoteHTTP} from "./QuotesGet";
import QuoteFrame from "./QuoteFrame";

export default function Quotes({order = ""}) {
    const s = GetQuoteHTTP(`/quotes${order}`)
    return (
        <>
            {s.map((val) => <QuoteFrame key={val['id']} quote={val}/>)}
        </>
    );
}
