import Header from './QuoteHeader'
import Footer from './QuoteFooter'
import Toolbar from "./Toolbar";
import Lines from "./Lines";


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