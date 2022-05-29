import QuotesAllCategories from "../../components/quotes-all-catgories";
import {useState} from "react";
import Button from "../../components/Button";
import QuotesByCategories from "../../components/quotes-by-categories";


export default function AllQuotes() {

    const cat = QuotesAllCategories()
    const [currCategories, setCurrCategories] = useState(cat)
    const [currOrder, setCurrOrder] = useState("")

    const View = () => {
        if (!currCategories[0]) {
            return <QuotesByCategories categories={cat} order={currOrder}/>
        }
        return <QuotesByCategories categories={currCategories} order={currOrder}/>
    }


    return (
        <>
            <title>All Quotes</title>
            <>
                {cat.map((val) => (
                    <Button key={val} value={val} onPress={
                        () => {
                            setCurrCategories(val);
                        }
                    }/>
                ))}
                <>
                    <Button value={"all quotes"} onPress={
                        () => {
                            setCurrCategories(cat);
                        }
                    }/>

                    <Button value={"ASC"} onPress={
                        () => {
                            setCurrOrder("/ASC")
                        }
                    }/>
                    <Button value={"DESC"} onPress={
                        () => {
                            setCurrOrder("/DESC")
                        }
                    }/>
                </>

            </>

            <>{View()}</>
        </>


    )
}