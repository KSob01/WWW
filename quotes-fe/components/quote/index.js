import {GetQuoteHTTP} from "../QuotesGet";
import Layout from "../Layout";

export default function Quote({id}) {
    const s = GetQuoteHTTP(`/quote/${id}`)
    return (
        <>
            {s['quote']}{s['author']}
        </>
    )
}
