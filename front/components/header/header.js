import Link from 'next/link'
import { useEffect } from 'react'
import hs from '../../styles/header.module.css'

export default function Header() {
    useEffect(() => {
        window.onscroll = function() {handleScroll()}
    })

    const toggleNav = () => {
        const el = document.getElementById("top")
    }

    const handleScroll = () => {
        const el = document.getElementById("top")

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            el.classList.remove(hs.header_tp)
            el.classList.add(hs.header_sm)
        } else {
            el.classList.add(hs.header_tp)
            el.classList.remove(hs.header_sm)
        }
    }

    return (
        <header id="top" className={`${hs.header} ${hs.header_tp}`}>
            <div className={`${hs.container_fluid} container-fluid`}>
                <div className={hs.inner_header}>
                    <Link href="/"><a className={hs.inner_brand}>SII Africa</a></Link>
                </div>

                <div className={`${hs.inner_navigation} ${hs.collapse}`}>
                    <div className={`${hs.inner_nav} ${hs.onepage_nav}`}>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a><span className={hs.menu_item_span}>About</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><span className={hs.menu_item_span}>Investments</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><span className={hs.menu_item_span}>Impact</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/insights/home">
                                    <a><span className={hs.menu_item_span}>Insights</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><span className={hs.menu_item_span}>Contact</span></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={hs.extra_nav}>
                    <ul>
                        <li>
                            <Link href="#">
                                <a className={hs.off_canvas_open} onClick={toggleNav}>
                                    <span className={hs.menu_item_span}><i class="bi-list"></i></span>
                                </a>
                            </Link>
                        </li>
                        <li className={hs.nav_toggle}>
                            <Link href="#">
                                <a data-toggle="collapse" data-target=".inner_navigation" onClick={toggleNav}>
                                    <span className={hs.menu_item_span}><i className="bi-list"></i></span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}