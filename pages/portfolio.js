import Router from 'next/router'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

export default function Portfolio() {

  const linkClickHandle = () => {
    Router.push('/')
  }

  return (
    <MainLayout title='Portfolio Page'>
      <div className='portfolio-page'>
        <h1>COMMERCIAL PROJECTS:</h1>

        <h2>Rental-search-service</h2>
        <p>Web application for easy rental housing search</p>
        <ul>
          <li>Carried out the duties of the developer of the project, was the
            deputy of the team lead</li>
          <li>Developed the client and admin parts of the web application</li>
          <li>Developed client-server interaction by RESTful API (Node.js, Express)</li>
          <li>Formed functional components on React with using React-hooks and Redux</li>
          <li>Engaged in layout (including adaptive
            mobile devices) and landing page style</li>
            <p>
          <Link href="https://github.com/evgybarabanova/Rental-search-service"><a>GitHub page of project</a></Link>
          </p>
        </ul>

        <h2>Startup project Advice</h2>
        <p>Psychological service telegram bot support</p>
        <ul>
          <li>Developed database architecture and applications</li>
          <li>Set up interaction with third-party APIs, including
            with Telegram Bot API, Google Translate API, Advice API</li>
          <li>Provided assistance in finding and fixing bugs in the
            application code.</li>
            <img className='gif2' src="gif2.gif" alt='gif2'/>
            <p>
          <Link href="https://github.com/evgybarabanova/Telegram-Bot-Advice"><a>GitHub page of project</a></Link>
          </p>  
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
          <img className='gif' src="gif.gif" alt='gif'/>
          <p>
          <Link href="https://github.com/evgybarabanova/PetsOn"><a>GitHub page of project</a></Link>
          </p>
        </ul>
        <h1  className='h1'>PET PROJECT:</h1>
        <h2>Stickers</h2>
        <p>Web application showing my knowledge of React</p>
        <ul> Main functions:
          <li>User registion </li>
          <li>User authentication</li>
          <li>User retrieving</li>
          <li>User email updating in profile page</li>
          <li>User name updating in profile page</li>
          <li>User password updating in profile page</li>
          <li>Creating notes</li>
          <li>Deleting notes</li>
          <li>Searching notes</li>
          <li>Updating notes</li>
          <img className='gif3' src="gif3.gif" alt='gif3'/>
        </ul>
      </div>
      <button onClick={linkClickHandle} className='button-click'> back to home</button>
    </MainLayout>
  )
}
