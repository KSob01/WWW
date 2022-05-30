import {GetQuoteHTTP} from "../QuotesGet";
import {quoteFrame} from '../../styles/styles.module.css'
import QuoteFrame from "../QuoteFrame";

export default function Quotes({order = ""}) {
    const s = GetQuoteHTTP(`/quotes${order}`)
    return (
        <>
            {s.map((val, i) => <QuoteFrame key={val['id']} quote={val}/>)}
        </>
    );
}
