import Header from './QuoteHeader'
import Footer from './QuoteFooter'
import ToolbarWithLinks from "./Toolbar-with-links";

export default function Layout({children}) {
    return (
        <div className="content">
            <Header/>
            <ToolbarWithLinks/>
            {children}
            <Footer/>
        </div>
    )
}