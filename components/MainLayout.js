import Head from 'next/head'
import Link from 'next/link'
import classes from '../styles/MainLayout.module.scss'

export default function MainLayout({ children, title = 'App Evgenia Barabanova' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content='cv,javascript,next.js,it,junior, react'></meta>
        <meta charSet='utf-8' />
      </Head>
      <nav className={classes.nav}>
      <Link href="/"><a>Main</a></Link>
        <Link href="/cv"><a>CV</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
        <Link href="/portfolio"><a>Portfolio</a></Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
