import Router from 'next/router'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

export default function Contact() {

  const linkClickHandle = () => {
    Router.push('/')
  }

  return (
    <MainLayout title='Contact Page'>

      <h1>My contact</h1>
      <ul>
        <li>phone, +7 927 190 63 92</li>
        <li>GitHub, https://github.com/evgybarabanova</li>
        <li>LinkedIn, https://linkedin.com/in/evgy-bar</li>
        <li>Telegram, @evgybar</li>
        <li>e-mail,evgybarabanova@gmail.com</li>
      </ul>
      <button onClick={linkClickHandle}> back to home</button>
    </MainLayout>
  )
}
