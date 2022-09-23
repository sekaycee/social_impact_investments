import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home · Social Impact Investment</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Web app for a US-based NGO" />
        <meta name="author" content="Kay Cee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="top" class="header header-tp">
         <div class="container-fluid">

            <div class="inner-header">
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
