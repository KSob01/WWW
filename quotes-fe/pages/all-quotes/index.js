import QuotesAllCategories from "../../components/quotes-all-catgories";
import {useState} from "react";
import Button from "../../components/Button";
import QuotesByCategories from "../../components/quotes-by-categories";
import {catToolBar} from "../../styles/styles.module.css"

export default function AllQuotes() {
    const cat = QuotesAllCategories()
    const [currCategories, setCurrCategories] = useState(QuotesAllCategories())
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
            <ul className={catToolBar}>
                {cat.map((val) => (
                    <li key={val}>
                        <Button value={val} onPress={
                            () => {
                                setCurrCategories(val);
                            }
                        }/>
                    </li>
                ))}

                <li>
                    <Button value={"all quotes"} onPress={
                        () => {
                            setCurrCategories(cat);
                        }
                    }/>
                </li>


            </ul>
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

            <>{View()}</>
        </>

    )
}