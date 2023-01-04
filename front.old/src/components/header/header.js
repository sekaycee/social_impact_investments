import Link from 'next/link'
import { useEffect } from 'react'
// import hs from './header.module.css'

export default function Header() {
    useEffect(() => {
        window.onscroll = function() {handleScroll()}
    })

    const toggleNav = () => {
        const el = document.getElementById("nav")
    }

    const handleScroll = () => {
        const el = document.getElementById("top")

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            el.classList.remove("header-transparent")
            el.classList.add("header-small")
        } else {
            el.classList.add("header-transparent")
            el.classList.remove("header-small")
        }
    }

    return (
        <header id="top" className="header header-transparent">
            <div className="container-fluid">
                <div className="inner-header">
                    <Link href="/"><a className="inner-brand">SII Africa</a></Link>
                </div>

                <div className="inner-navigation collapse">
                    <div className="inner-nav onepage-nav">
                        <ul>
                            <li>
                                <Link href="#">
                                    <a><span className="menu-item-span">About</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><span className="menu-item-span">Investments</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><span className="menu-item-span">Impact</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/insights/home">
                                    <a><span className="menu-item-span">Insights</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><span className="menu-item-span">Contact</span></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="extra-nav">
                    <ul>
                        <li>
                            <Link href="#">
                                <a className="off-canvas-open" onClick={toggleNav}>
                                    <span className="menu-item-span"><i class="bi-list"></i></span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-toggle">
                            <Link href="#">
                                <a data-toggle="collapse" data-target=".inner-navigation" onClick={toggleNav}>
                                    <span className="menu-item-span"><i className="bi-list"></i></span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}