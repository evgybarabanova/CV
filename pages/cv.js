import Router from 'next/router'
import MainLayout from '../components/MainLayout'

export default function cv() {

  const linkClickHandle = () => {
    Router.push('/')
  }

  return (
    <MainLayout title='CV Page' >
      <h1 className='h1'>SKILLS:</h1>
      <div className='cv-page'>
        <div className='front'>
        <h2>Front-end:</h2>
        <p>React, Redux (Thunk, Saga), JS (ES6), HTML5, CSS3, SCSS, Tailwind UI, Bootstrap, Material UI, Next.js</p>
        </div>
        <div className='back'>
        <h2>Back-end:</h2>
        <p>NodeJs, Express, WebSocket</p>
        </div>
        <div className='db'>
        <h2>DB:</h2>
        <p>PostgreSQL, Sequelize ORM</p>
        </div>
        <div className='test'>
        <h2>Test:</h2>
        <p>Jest</p>
        </div>
        <div className='api'>
        <h2>API:</h2>
        <p>Yandex, Google</p>
        </div>
        <div className='another'>
        <h2>Another:</h2>
        <p>GitHub, VS Code, Slack, Trello, Jira, Webpack, Figma</p>
        <p>I am used to solving complex problems and quickly understand what is required of me.</p>
        <p>I speak English (intermediate level)</p>
        </div>
      </div>
      <button onClick={linkClickHandle} className='button-click'>back to home</button>
    </MainLayout>
  )
}
