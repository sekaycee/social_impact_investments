import Footer from './footer/footer'
import Header from './header/header'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="wrapper">{children}</main>
            <Footer />
        </>
    )
}