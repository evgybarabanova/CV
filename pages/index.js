import Link from 'next/link'
import classes from '../styles/MainLayout.module.scss'

import MainLayout from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout title='Main Page'>
      <h1>HI! I`M EVGENIA BARABANOVA!</h1>
      <div className='main'>
        <h2>FULL STACK WEB DEVELOPER</h2>
      <p> I have 1 year of experience,
        I'm able to create web applications
        <br /> from scratch, both in client and server side.
      </p>
        {/* <img  className='pic' src='/yoga.png' alt='logo' /> */}
      </div>
      <Link href="/contact"><a>Contact me!</a></Link>
    </MainLayout>
  )
}

