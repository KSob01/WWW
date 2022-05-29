import {GetQuoteHTTP} from "../QuotesGet";
import {quoteFrame} from '../../styles/styles.module.css'
export default function QuotesByCategories({categories, order = ""}) {
    const s = GetQuoteHTTP(`/quotes-by-categories${order}?cat=${categories}`)
    return (
        <>
            {s.map((val, i) => <h1 key={i} className={quoteFrame}>
                <>
                    {val['quote']}
                    <br/>
                    {val['author']}
                </>
            </h1>)}
        </>
    );
}
