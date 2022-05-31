import {GetQuoteHTTP} from "./QuotesGet";

export default function QuotesAllCategories() {
    const s = GetQuoteHTTP(`/categories`)
    return (s)
}

