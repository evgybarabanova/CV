import Link from 'next/link'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
// import pic from '../public/pic.jpeg'

export default function Index() {
  return (
    <MainLayout title='Main Page'>
      <>
        <h1>aaaaaaaaaaaaaa</h1>
        {/* <img src={pic} alt='pic' /> */}
        <h1>HI! I`M EVGENIA BARABANOVA</h1>
        <p>FULL STACK DEVELOPER</p>
        <p>Hello! I`m Evgenia Barabanova, full stack developer with 1 over of expirience.
          I am able to create a web application
          from scratch both client-side and server-side.
        </p>
        <div className='container'>
          <p>Age: 31</p>
          <p>Location: Moscow</p>
          <p>email: evgybarabanova@gmail.com</p>
          <p>phone: +7 927 190 63 92</p>
          <p>Website: </p>
          <p>Social Link</p>
          <button>whats app</button>
          <button>Telegram</button>
          <button>linkedin</button>
        </div>
      </>
    </MainLayout>

  )
}

