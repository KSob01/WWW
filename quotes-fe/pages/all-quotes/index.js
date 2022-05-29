import QuotesAllCategories from "../../components/quotes-all-catgories";
import {useState} from "react";
import Button from "../../components/Button";
import QuotesByCategories from "../../components/quotes-by-categories";
import {catToolBar,upArrow,downArrow,button} from "../../styles/styles.module.css"
import Image from "next/image";

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
                    <li key={val} className={button}>
                        <Button value={val} onPress={
                            () => {
                                setCurrCategories(val);
                            }
                        }/>
                    </li>
                ))}

                <li className={button}>
                    <Button value={"all quotes"} onPress={
                        () => {
                            setCurrCategories(cat);
                        }
                    }/>
                </li>


            </ul>
            <>
                <br></br>
                <Button value={<Image src={"/arrow_down.png"} alt="arrow" width="64" height="60" className={upArrow}/>} onPress={
                    () => {
                        setCurrOrder("/ASC")
                    }
                }/>
                <Button value={<Image src={"/arrow_down.png"} alt="arrow" width="64" height="60" className={downArrow}/>} onPress={
                    () => {
                        setCurrOrder("/DESC")
                    }
                }/>
            </>



            <>{View()}</>
        </>

    )
}