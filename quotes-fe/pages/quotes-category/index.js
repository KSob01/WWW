import {GetQuoteHTTP} from "../../components/QuotesGet";

export default function QuotesByCategory({category}) {
    const s= GetQuoteHTTP(`/quotes-by-category?cat=${category}`)
    return (
        <>
            {s.map((val, i) => <p key={i}>{val['quote']}{val['author']}</p>)}
        </>
    );
}