import Router from 'next/router'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

export default function Contact() {

  const linkClickHandle = () => {
    Router.push('/')
  }

  return (
    <MainLayout title='Contact Page'>
      <div className='mainPage'>
        <h1>MY CONTACT</h1>
        <ul className='contact-icon'>
          <button><Link href='https://api.whatsapp.com/send/?phone=79271906392&text=Hello%2C+Evgenia'>Phone</Link></button>
          <button><Link href='https://github.com/evgybarabanova'>GitHub</Link></button>
          <button><Link href='https://linkedin.com/in/evgybar'>LinkedIn</Link></button>
          <button><Link href='https://t.me/EVGYBAR'>Telegram</Link></button>
          <button><Link href='mailto:evgybarabanova@gmail.com'>Email</Link></button>
        </ul>
        <button onClick={linkClickHandle} className='button-click'> back to home</button>
      </div>

    </MainLayout>
  )
}
