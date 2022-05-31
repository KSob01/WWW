import {GetQuoteHTTP} from "./QuotesGet";
import QuoteFrame from "./QuoteFrame";

export default function QuotesByCategories({categories, order = ""}) {
    const s = GetQuoteHTTP(`/quotes-by-categories${order}?cat=${categories}`)
    return (
        <>
            {s.map((val) =>
                <QuoteFrame key={val['id']} quote={val}/>
            )}
        </>
    );
}
