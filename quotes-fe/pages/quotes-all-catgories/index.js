import {GetQuoteHTTP} from "../../components/QuotesGet";

export default function QuotesAllCategories() {
    const s= GetQuoteHTTP(`/categories`)
    return(s)
}
