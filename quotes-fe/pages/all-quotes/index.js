import Quotes from "../../components/quotes";
import QuotesAllCategories from "../../components/quotes-all-catgories";
import {useEffect, useState} from "react";
import Button from "../../components/Button";
import Quote from "../../components/quote";
import QuotesByCategories from "../../components/quotes-by-categories";

export default function AllQuotes() {
    const categories = QuotesAllCategories()
    const [currCategories, setCurrCategories] = useState(categories)
    const [currOrder, setCurrOrder] = useState("")
    const [view, setView] = useState(<Quotes/>);

    return (
        <>
            <title>All Quotes</title>
            <>
                {categories.map((val) => (
                    <Button key={val} value={val} onPress={
                        () => {
                            setView(<QuotesByCategories categories={val} order={currOrder}/>);
                            setCurrCategories(val);
                        }
                    }/>
                ))}
                <h1>
                    <Button value={"ASC"} onPress={
                        () => {
                            setCurrOrder("/ASC")
                            setView(<QuotesByCategories categories={currCategories} order={"/ASC"}/>)
                        }
                    }/>
                    <Button value={"DESC"} onPress={
                        () => {
                            setCurrOrder("/DESC")
                            setView(<QuotesByCategories categories={currCategories} order={"/DESC"}/>)
                        }
                    }/>
                </h1>

            </>

            <h1>{view}</h1>
        </>


    )
}