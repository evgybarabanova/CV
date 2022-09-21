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
      <Link href="/"><a><img className='logomain' src='/home.png' alt='logohome' /></a></Link>
        <Link href="/cv"><a><img className='logomain' src='/cv.png' alt='logocv' /></a></Link>
        <Link href="/portfolio"><a><img className='logomain' src='/port.png' alt='logoport' /></a></Link>
        <Link href="/contact"><a><img className='logomain' src='/contact.png' alt='logocontact' /></a></Link>
      </nav>
      <main className={classes.main}>
        {children}
      </main>
    </>
  )
}
