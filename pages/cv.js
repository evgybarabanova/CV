import Router from 'next/router'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

export default function cv() {

  const linkClickHandle = () => {
    Router.push('/')
  }

  return (
    <MainLayout title='CV Page'>

      <h1>
        TECHNICAL SKILLS:
      </h1>
      <ul>
        <li> Front-end:</li>
        <p> React, Redux (Thunk, Saga), JS (ES6), HTML5, CSS3, SCSS, Bootstrap, Material UI, Next.js</p>
        <li> Back-end: </li>
        <p>NodeJs, Express, WebSocket</p>
        <li>DB:</li>
        <p>PostgreSQL, Sequelize ORM</p>
        <li>Test:</li>
        <p>Jest</p>
        <li>API:</li>
        <p>Yandex, Google</p>
        <li>Another:</li>
        <p>GitHub, VS Code, Slack, Trello, Jira, Webpack, Figma</p>
        <p>I am used to solving complex problems and quickly understand what is required of me.</p>
        <p>I speak English (intermediate level)</p>
      </ul>
      <button onClick={linkClickHandle}> back to home</button>
    </MainLayout>
  )
}
