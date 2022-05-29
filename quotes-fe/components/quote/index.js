import {GetQuoteHTTP} from "../QuotesGet";
import {quoteFrame} from '../../styles/styles.module.css'

export default function Quote({id}) {
    const s = GetQuoteHTTP(`/quote/${id}`)
    return (
        <h1 className={quoteFrame}>
            <>
                {s['quote']}
                <br/>
                {s['author']}
            </>

        </h1>
    )
}
