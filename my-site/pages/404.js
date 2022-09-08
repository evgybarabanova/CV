import Router from 'next/router'

export default function ErrorPage() {

  const linkClickHandle = () => {
    Router.push('/')
  }

  return (
    <>
      <h1>Error 404</h1>
      <p>Please go back to home</p>
      <button onClick={linkClickHandle}> back to home</button>
    </>
  )
}

