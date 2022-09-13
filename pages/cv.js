import Router from 'next/router'
import MainLayout from '../components/MainLayout'

export default function cv() {

  const linkClickHandle = () => {
    Router.push('/')
  }

  return (
    <MainLayout title='CV Page'>
      <h1 className='h1'>SKILLS:</h1>
      <div className='cv-page'>
        <h2>Front-end:</h2>
        <p>React, Redux (Thunk, Saga), JS (ES6), HTML5, CSS3, SCSS, Bootstrap, Material UI, Next.js</p>
        <h2>Back-end:</h2>
        <p>NodeJs, Express, WebSocket</p>
        <h2>DB:</h2>
        <p>PostgreSQL, Sequelize ORM</p>
        <h2>Test:</h2>
        <p>Jest</p>
        <h2>API:</h2>
        <p>Yandex, Google</p>
        <h2>Another:</h2>
        <p>GitHub, VS Code, Slack, Trello, Jira, Webpack, Figma</p>
        <p>I am used to solving complex problems and quickly understand what is required of me.</p>
        <p>I speak English (intermediate level)</p>
      </div>
      <button onClick={linkClickHandle} className='button-click'>back to home</button>
    </MainLayout>
  )
}
