import RandQuote from "../../components/RandQuote";
import {pageHeader, reload} from "../../styles/styles.module.css"
import {useState} from "react";
import Image from "next/image";
import {Parallax} from "react-scroll-parallax";

export default function QuoteOfTheDay() {
    const [counter, setCounter] = useState(0)

    const View = () => {
        return <Parallax speed={-8}><RandQuote faker={counter}/></Parallax>
    }

    return (
        <>
            <title>Random quote</title>
            <>
                <h1 className={pageHeader}>Generate Random quote : </h1>
                <br></br>
                <button className={reload}
                        onClick={
                            () => {
                                setCounter(counter + 1)
                            }
                        }><Image src={"/reload.ico"} alt="user" width="75%" height="75%"/></button>
                <>{View()}</>
            </>
        </>

    )

}