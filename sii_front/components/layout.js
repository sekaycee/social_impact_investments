import Head from 'next/head'
import Footer from './footer/footer'
import Header from './header/header'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Home · Social Impact Investment</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Web app for a US-based NGO" />
                <meta name="author" content="Kay Cee" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}