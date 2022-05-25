import {GetQuoteHTTP} from "../../components/Quotes.module";

export default function Index() {
    const s= GetQuoteHTTP("/quotes?cat=A")
    return (
        <>
            {s.map((val, i) => <p key={i}>{val['quote']}{val['author']}</p>)}
        </>
    );
}
