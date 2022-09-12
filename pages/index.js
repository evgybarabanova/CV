import Link from 'next/link'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout title='Main Page'>
      <img src='/pic.jpeg' alt='logo' />
      <h1>HI! I`m <span class="text-oc">EVGENIA BARABANOVA</span></h1>
      <p>I'm a FULL STACK WEB DEVELOPER
      <br/> With 1 year of experience,
        I'm able to create web applications
        from scratch, both in client and server side.
      </p>
      <p><Link href="/contact">Contact me!</Link></p>
    </MainLayout>
  )
}

