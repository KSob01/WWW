import Header from './QuoteHeader'
import Footer from './QuoteFooter'
import Toolbar from "./Toolbar";

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <Toolbar/>
            {children}
            <Footer/>
        </div>
    )
}