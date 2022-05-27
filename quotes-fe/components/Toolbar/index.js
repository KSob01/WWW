import Button from "./Button";
import {useState} from "react";
import Quotes from "../../pages/quotes";
import Quote from "../../pages/quote";
import styles from "../../styles/Home.module.css";
import QuotesByCategories from "../../pages/quotes-categories";
import {GetQuoteHTTP} from "../QuotesGet";
import QuotesAllCategories from "../../pages/quotes-all-catgories";
import {Dropdown, Option} from "./Dropdown";

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
                    setView(<Quotes/>);
                }}/>
                {categories.map((val) => (<Button key={val} value={val} onPress={() => {
                    setView(<QuotesByCategories categories={val}/>);
                }}/>))}
                {/*<>*/}
                {/*    <Dropdown*/}
                {/*        buttonText="Send form"*/}
                {/*        action="/"*/}
                {/*    >*/}
                {/*        <Option selected value="Click to see options" />*/}
                {/*        <Option value="Option 1" />*/}
                {/*        <Option value="Option 2" />*/}
                {/*        <Option value="Option 3" />*/}
                {/*    </Dropdown>*/}
                {/*</>*/}

            </h1>
            <h1>{view}</h1></>
        // <>
        //     <Button color={Colors.SUCCESS}>Submit</Button>
        // </>

    )
}