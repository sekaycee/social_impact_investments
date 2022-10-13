import Link from 'next/link'
import hs from '../../styles/header.module.css'

export default function Header() {
    return (
        <header id="top" className={`${hs.header} ${hs.header_tp}`}>
            <div className={`${hs.container_fluid} container-fluid`}>
                <div className={hs.inner_header}>
                    <Link className={hs.inner_brand} href="/">Social Impact</Link>
                </div>

                <div className={`${hs.inner_navigation} ${hs.collapse}`}>
                    <div className={`${hs.inner_nav} ${hs.onepage_nav}`}>
                        <ul>
                            <li>
                                <Link href="#">
                                    <span className={hs.menu_item_span}>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className={hs.menu_item_span}>Investments</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className={hs.menu_item_span}>Impact</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/insights/home">
                                    <span className={hs.menu_item_span}>Insights</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className={hs.menu_item_span}>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={hs.extra_nav}>
                    <ul>
                        <li className={hs.nav_toggle}>
                            <Link href="#" data-toggle="collapse" data-target=".inner_navigation">
                                <span className={hs.menu_item_span}><i className="bi-list"></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}