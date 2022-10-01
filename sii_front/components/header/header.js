import Link from 'next/link'
//import styles from '../../styles/header.module.css'

export default function Header() {
    return (
        <header id="top" className="header header-tp">
            <div className="container-fluid">
                <div className="inner-header">
                    <Link className="inner-brand" href="/">Social Impact</Link>
                </div>

                <div className="inner-navigation collapse">
                    <div className="inner-nav onepage-nav">
                        <ul>
                            <li>
                            <Link href="#">
                                <span className="menu-item-span">About</span>
                            </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <span className="menu-item-span">Investments</span>
                            </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <span className="menu-item-span">Impact</span>
                            </Link>
                            </li>
                            <li>
                            <Link href="/insights/home">
                                <span className="menu-item-span">Insights</span>
                            </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <span className="menu-item-span">Contact</span>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="extra-nav">
                    <ul>
                        <li className="nav-toggle">
                            <Link href="#" data-toggle="collapse" data-target=".inner-navigation">
                            <span className="menu-item-span"><i className="bi-list"></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}