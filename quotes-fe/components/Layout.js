import Header from './QuoteHeader'
import Footer from './QuoteFooter'
import Toolbar from "./Toolbar";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
    return (
        <>
            <Header/>
            <Toolbar/>
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}