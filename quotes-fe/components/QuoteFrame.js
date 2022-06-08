import {quoteFrame, heart} from "../styles/styles.module.css";
import Image from "next/image";
import {Parallax} from "react-scroll-parallax";

export default function QuoteFrame({quote}) {
    return (

        <div className={quoteFrame}>
            <h1>
                <>
                    {quote['quote']}
                    <br/>
                    {quote['author']}
                </>

            </h1>
            <Parallax speed={3}>
                <Image src={"/heart.png"} alt="user" width="64" height="60" className={heart}/>
            </Parallax>
        </div>
    )
}