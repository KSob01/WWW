import {GetQuoteHTTP} from "../../components/QuotesGet";

export default function Quotes() {
    const s= GetQuoteHTTP("/quotes")
    return (
        <>
            {s.map((val, i) => <p key={i}>{val['quote']},{val['author']}</p>)}
        </>
    );
}
