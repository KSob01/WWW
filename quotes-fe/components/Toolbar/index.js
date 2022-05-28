import Button from "./Button";
import {useState} from "react";
import Quotes from "../quotes";
import Quote from "../quote";
import QuotesByCategories from "../quotes-categories";
import QuotesAllCategories from "../quotes-all-catgories";

export default function Toolbar() {
    const categories = QuotesAllCategories()

    const [view, setView] = useState(<Quotes/>);
    return (
        <>
            <h1>
                <Button value="Quote of the day" onPress={() => {
                    setView(<Quote id={1}/>);
                }}/>
                <Button value="All quotes" onPress={() => {
                    setView(<Quotes order={"/ASC"}/>);
                }}/>
                {categories.map((val) => (
                    <Button key={val} value={val} onPress={
                        () => {
                            setView(<QuotesByCategories categories={val} order={"/ASC"}/>);
                        }
                    }/>
                ))}

            </h1>
            <h1>{view}</h1></>


    )
}