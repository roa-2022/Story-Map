import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>
        <p>Place holder for text about app</p>
        <Link to="/stories">
          <button>Check Get Stories</button>
        </Link>
      </div>
    </>
  )
}

export default Home
