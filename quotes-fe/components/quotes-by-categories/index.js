import {GetQuoteHTTP} from "../QuotesGet";
import QuoteFrame from "../styles";
export default function QuotesByCategories({categories, order = ""}) {
    const s = GetQuoteHTTP(`/quotes-by-categories${order}?cat=${categories}`)
    return (
        <>
            {s.map((val, i) => <QuoteFrame key={i}>{val['quote']}{val['author']}</QuoteFrame>)}
        </>
    );
}
