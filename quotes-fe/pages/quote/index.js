
import {GetQuoteHTTP} from "../../components/Quotes.module";

export default function Quotes() {
    const s= GetQuoteHTTP({path: "/quote/1"})
    return (
        <>
            {/*{JSON.stringify(s)}*/}
           {s.map((val, i) => <p key={i}>{val['quote']}</p>)}
        </>
    )
}
