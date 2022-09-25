import React from 'react'
import Nav from './NavBulma'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero has-background-primary-light is-fullheight">
        {/* <div className="hero-head">
          <header className="header">
            <Nav />
            <h1>Whenua O Korero</h1>
          </header> */}
        {/* </div> */}
        <div className="hero-body">
          <div className="container ">
            <div className="columns is-vcentered">
              <div className="column is-6">{/* fist column  */}</div>
              <div className="column"></div>
              <div className="container is-flex-direction-column home-txt-btn">
                <div className="box bd-notification is-primary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero suscipit nihil quo, a magnam enim itaque cumque odio
                    exercitationem ducimus beatae aperiam modi nesciunt debitis
                    quaerat iusto culpa incidunt tempora, doloribus saepe
                    expedita dolorem accusantium, harum earum. Sequi architecto,
                    sapiente ut dolorem consequatur in culpa, eveniet dolorum
                    maxime porro accusamus?
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
