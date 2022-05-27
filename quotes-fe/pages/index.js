import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home({allPostsData}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Quotes</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>
        </div>


)
}
