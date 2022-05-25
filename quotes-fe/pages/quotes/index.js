import {GetQuoteHTTP} from "../../components/Quotes.module";

export default function Index() {
    const s= GetQuoteHTTP({path: "/quotes"})
    return (
        <>
            {/*{JSON.stringify(s)}*/}
            {s.map((val, i) => <p key={i}>{val['quote']}</p>)}
        </>
    );
}
