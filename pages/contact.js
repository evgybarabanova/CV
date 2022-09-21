import Router from 'next/router'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

export default function Contact() {

  const linkClickHandle = () => {
    Router.push('/')
  }

  return (
    <MainLayout title='Contact Page'>
        <h1>MY CONTACT</h1>
      <div className='contact'>
        <ul className='contact-icon'>
          <button><Link href='https://api.whatsapp.com/send/?phone=79271906392&text=Hello%2C+Evgenia'><img className='logocontact' src='/wa.png' alt='wa' /></Link></button>
          <button><Link href='https://github.com/evgybarabanova'><img className='logocontact' src='/git.png' alt='git' /></Link></button>
          <button><Link href='https://linkedin.com/in/evgybar'><img className='logocontact' src='/lin.png' alt='in' /></Link></button>
          <button><Link href='https://t.me/EVGYBAR'><img className='logocontact' src='/tg.png' alt='tg' /></Link></button>
          <button><Link href='mailto:evgybarabanova@gmail.com'><img className='logocontact' src='/email.png' alt='email' /></Link></button>
        </ul>
      </div>
        <button onClick={linkClickHandle} className='button-click'> back to home</button>
    </MainLayout>
  )
}
