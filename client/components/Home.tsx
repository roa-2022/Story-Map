import React from 'react'
import Nav from './NavBulma'

import { Link } from 'react-router-dom'

function Home() {
  const externalImage = 'https://picsum.photos/id/128'
  return (
    <>
      <section className="hero has-background-primary-light is-fullheight">
        <div className="hero-body">
          <div className="container ">
            <div className="columns is-vcentered">
              <div className="column is-6">{/* fist column  */}</div>
              <div className="column"></div>
              
              <div className="container is-flex-direction-column home-txt-btn">
                <div className="box bd-notification is-primary is-flex">
                  <p>
                    Welcome to Whenua O Korero, "A Land of Your Words". This is
                    a platform for users to share local Maori stories and
                    legends, which are then displayed on a map of New Zealand.
                    Users will be able to add their local stories and, pending
                    admin approval, will have the story published on our site.
                    Users will be prompted to enter a location (regional or more
                    specific), and this will place a pin on our map, which can
                    be clicked on to recall the story
                  </p>
                </div>
                <div>
                  <Link to="/stories">
                    <button className="button is-primary">
                      Check Get Stories
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
