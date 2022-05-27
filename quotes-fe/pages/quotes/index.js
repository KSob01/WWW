import {GetQuoteHTTP} from "../../components/QuotesGet";

export default function Quotes({order = ""}) {
    const s = GetQuoteHTTP(`/quotes${order}`)
    return (
        <>
            {s.map((val, i) => <p key={i}>{val['quote']},{val['author']}</p>)}
        </>
    );
}
