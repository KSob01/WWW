
import {GetQuoteHTTP} from "../../components/QuotesGet";

export default function Quote({id}) {
    const s= GetQuoteHTTP( `/quote/${id}`)
    return (
        <>
            {s['quote']}{s['author']}
        </>
    )
}
