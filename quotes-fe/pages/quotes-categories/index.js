import {GetQuoteHTTP} from "../../components/QuotesGet";

export default function QuotesByCategories({categories}) {
    const s= GetQuoteHTTP(`/quotes-by-categories?cat=${categories}`)
    return (
        <>
            {s.map((val, i) => <p key={i}>{val['quote']}{val['author']}</p>)}
        </>
    );
}
