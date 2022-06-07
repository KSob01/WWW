import Layout from "../components/Layout";
import { UserProvider } from '@auth0/nextjs-auth0';
function MyApp({Component, pageProps}) {
    const { user } = pageProps;
  return(
    <Layout>
        {/*<UserProvider user={user}>*/}
         <Component {...pageProps} />
        {/*</UserProvider>*/}
    </Layout>)
}

export default MyApp
