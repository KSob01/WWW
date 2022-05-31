import {pageHeader} from "../styles/styles.module.css"
import Quote from "../components/Quote";

export default function Home() {

    return (
        <>
            <title>Home</title>
            <h1 className={pageHeader}>
                Our favorite educative quotes:
            </h1>
            <Quote id={55}/>
            <Quote id={54}/>
            <Quote id={27}/>
        </>

    )
}