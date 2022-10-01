import Link from 'next/link'
import styles from '../../styles/header.module.css'

export default function Header() {
    return (
        <header id="top" class="header header-tp">
            <div class="container-fluid">
                <div className={styles.inner-header}>
                    <Link class="inner-brand" href="/">Social Impact</Link>
                </div>

                <div class="inner-navigation collapse">
                    <div class="inner-nav onepage-nav">
                        <ul>
                            <li>
                            <Link href="#">
                                <span class="menu-item-span">About</span>
                            </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <span class="menu-item-span">Investments</span>
                            </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <span class="menu-item-span">Impact</span>
                            </Link>
                            </li>
                            <li>
                            <Link href="/insights/home">
                                <span class="menu-item-span">Insights</span>
                            </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <span class="menu-item-span">Contact</span>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="extra-nav">
                    <ul>
                        <li class="nav-toggle">
                            <Link href="#" data-toggle="collapse" data-target=".inner-navigation">
                            <span class="menu-item-span"><i class="bi-list"></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}