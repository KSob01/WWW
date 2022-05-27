import {GetQuoteHTTP} from "../../components/QuotesGet";

export default function QuotesByCategories({categories, order = ""}) {
    const s = GetQuoteHTTP(`/quotes-by-categories${order}?cat=${categories}`)
    return (
        <>
            {s.map((val, i) => <p key={i}>{val['quote']}{val['author']}</p>)}
        </>
    );
}
