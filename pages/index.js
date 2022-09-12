import Link from 'next/link'
import classes from '../styles/MainLayout.module.scss'

import MainLayout from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout title='Main Page'>
      <img  className={classes.pic} src='/pic.jpeg' alt='logo' />
      <h1>HI! I`M <span class="text-oc">EVGENIA BARABANOVA</span></h1>
      <p>FULL STACK WEB DEVELOPER
        <br /> with 1 year of experience,
        I'm able to create web applications
        <br /> from scratch, both in client and server side.
      </p>
      <Link href="/contact"><a>Contact me!</a></Link>
    </MainLayout>
  )
}

