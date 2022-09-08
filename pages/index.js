import Link from 'next/link'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
// import pic from '../public/pic.jpeg'

export default function Index() {
  return (
    <MainLayout title='Main Page'>
      <h1>aaaaaaaaaaaaaa</h1>

      <h1>Hello World! I`m EVGENIA BARABANOVA</h1>
      <p>I'm a FULL STACK WEB DEVELOPER</p>
      <p>With 1 year of experience,
        I'm able to create web applications
        from scratch, both in client and server side.
      </p>
      <p><Link href="/contact">Contact me!</Link></p>
    </MainLayout>

  )
}

