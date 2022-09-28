import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero-1 is-fullheight">
        <div className="hero-body">
          <div className="container ">
            <div className="columns ">
              <div className="column is-6">
                <div className="container is-flex-direction-column home-txt-btn">
                  <p className=" korero-title  is-size-1-tablet has-text-light my-6">
                    Kōrero O Te Whenua
                  </p>
                  <div className=" box-home bd-notification has-text-white">
                    <p>
                      Welcome to Kōrero O Te Whenua, "A Land of Your Words".
                      This is a platform for users to share local Maori stories
                      and legends, which are then displayed on a map of New
                      Zealand. Users will be able to add their local stories
                      and, pending admin approval, will have the story published
                      on our site. Users will be prompted to enter a location
                      (regional or more specific), and this will place a pin on
                      our map, which can be clicked on to recall the story.
                    </p>
                  </div>
                  <div>
                    <Link to="/stories">
                      <button className="button is-primary is-large my-6">
                        Stories
                        <i className="fa-sharp fa-solid fa-arrow-right mx-2"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Home
