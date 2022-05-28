import Quotes from "../../components/quotes";
import QuotesAllCategories from "../../components/quotes-all-catgories";
import {useState} from "react";
import Button from "../../components/Button";
import Quote from "../../components/quote";
import QuotesByCategories from "../../components/quotes-by-categories";

export default function AllQuotes(){
    const categories = QuotesAllCategories()

    const [view, setView] = useState(<Quotes/>);
    return (
        <>
            <title>All Quotes</title>
            <>
                {categories.map((val) => (
                    <Button key={val} value={val} onPress={
                        () => {
                            setView(<QuotesByCategories categories={val} order={"/ASC"}/>);
                        }
                    }/>
                ))}

            </>
            <h1>{view}</h1></>


    )
}