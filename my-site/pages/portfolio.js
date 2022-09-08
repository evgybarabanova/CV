import Router from 'next/router'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

export default function Portfolio() {

  const linkClickHandle = () => {
    Router.push('/')
  }

  return (
    <MainLayout title='Portfolio Page'>

      <h1>
        COMMERCIAL PROJECTS:
      </h1>
      <h2>
        Rental-search-service
      </h2>
      Web application for easy rental housing search
      <ul>
        <li>Carried out the duties of the developer of the project, was the
          deputy of the team lead</li>
        <li>Developed the client and admin parts of the web application</li>
        <li>Developed client-server interaction by RESTful API (Node.js, Express)</li>
        <li>Formed functional components on React with using React-hooks and Redux</li>
        <li>Engaged in layout (including adaptive
          mobile devices) and landing page style</li>
      </ul>
      <h2>Startup project Advice</h2>
      <p>Psychological service telegram bot support</p>
      <ul>
        <li>Developed database architecture and applications</li>
        <li>Set up interaction with third-party APIs, including
          with Telegram Bot API, Google Translate API, Advice API</li>
        <li>Provided assistance in finding and fixing bugs in the
          application code.</li>
      </ul>
      <h2>PetsOn</h2>
      <p>Web application for comfortable environment
        for pets and their owners, created to search for
        specialists, services and information</p>
      <ul>
        <li> Managed the project, combined the roles of team lead and
          developer</li>
        <li>Developed the architecture and logic of the project</li>
        <li>Formed functional components on React</li>
        <li>Worked with PostgreSQL database using Sequelize</li>
        <li>Worked with Bootstrap UI</li>
      </ul>
      <button onClick={linkClickHandle}> back to home</button>
    </MainLayout>
  )
}
