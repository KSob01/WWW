import Button from "./Button";
import {useState} from "react";
import Quotes from "../../pages/quotes";
import Quote from "../../pages/quote";
import QuotesByCategories from "../../pages/quotes-categories";
import QuotesAllCategories from "../../pages/quotes-all-catgories";

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
                {categories.map((val) => (<Button key={val} value={val} onPress={() => {
                    setView(<QuotesByCategories categories={val} order={"/ASC"}/>);
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