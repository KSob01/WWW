
import {useState} from "react";
import Image from "next/image";
import {reload} from "../styles/styles.module.css"
import RandQuote from "../components/rand-quote";


export default function Home() {
    const [counter, setCounter] = useState(0)

    const View = () => {
        return <RandQuote faker={counter}/>
    }

    return (
        <>
            <title>All Quotes</title>

            <>
                <br></br>
                <button
                    onClick={
                        () => {
                            setCounter(counter + 1)
                        }
                    }><Image src={"/reload.ico"} alt="user" width="75%" height="75%" className={reload}/></button>
            </>


            <>{View()}</>
        </>

    )
}