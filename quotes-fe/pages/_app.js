import Layout from "../components/Layout";
import {ParallaxProvider} from "react-scroll-parallax";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <ParallaxProvider>
                <Component {...pageProps} />
            </ParallaxProvider>
        </Layout>)
}

export default MyApp
