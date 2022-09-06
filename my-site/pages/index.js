import Link from 'next/link'

export default function Index() {
  return (
    <>
    <div className='navbar'>
    <p><Link href="/cv"><a>CV</a></Link></p>
      <p><Link href="/contact"><a>Contact</a></Link></p>
      <p><Link href="/portfolio"><a>Portfolio</a></Link></p>
    </div>
      <h1>
        Hello World!
      </h1>
      <div className='container'>
        <h2>My name Evgenia Barabanova</h2>
        <p>I am FULL STACK DEVELOPER.
          I am able to create a web application
          from scratch both client-side and server-side.</p>
        <ul>
          <li>Motivated, well-disciplined individual</li>
          <li>Finds joy in assisting others</li>
          <li>Knowledgeable in conversational</li>
          <li>English</li>
          <li>Team player</li>
        </ul>
      </div>
    </>
  )
}

