import {GetQuoteHTTP} from "../QuotesGet";
import QuoteFrame from "../styles";

export default function Quotes({order = ""}) {
    const s = GetQuoteHTTP(`/quotes${order}`)
    return (
        <>
            {s.map((val, i) => <QuoteFrame key={i}>
                <>
                    {val['quote']}
                    <br/>
                    {val['author']}
                </>
            </QuoteFrame>)}
        </>
    );
}
