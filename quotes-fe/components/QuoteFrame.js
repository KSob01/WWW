import {quoteFrame,heart} from "../styles/styles.module.css";
import Image from "next/image";

export default function QuoteFrame({quote}){
    return(

        <div className={quoteFrame}>
            <h1>
                <>
                    {quote['quote']}
                    <br/>
                    {quote['author']}
                </>

            </h1>
            <Image src={"/heart.png"} alt="user" width="64" height="60" className={heart}/>

        </div>
    )
}