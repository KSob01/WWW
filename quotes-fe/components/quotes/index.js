import {GetQuoteHTTP} from "../QuotesGet";
import {quoteFrame} from '../../styles/styles.module.css'

export default function Quotes({order = ""}) {
    const s = GetQuoteHTTP(`/quotes${order}`)
    return (
        <>
            {s.map((val, i) => <h1 key={i} className={quoteFrame}>
                <>
                    {val['quote']}
                    <br/>
                    {val['author']}
                </>
            </h1>)}
        </>
    );
}
