import React from 'react'
import Nav from './Nav'

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
                  <p className=" is-size-1-desktop has-text-light my-6">
                    Whenua O Korero
                  </p>
                  <div className=" box bd-notification has-background-light ">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero suscipit nihil quo, a magnam enim itaque cumque
                      odio exercitationem ducimus beatae aperiam modi nesciunt
                      debitis quaerat iusto culpa incidunt tempora, doloribus
                      saepe expedita dolorem accusantium, harum earum. Sequi
                      architecto, sapiente ut dolorem consequatur in culpa,
                      eveniet dolorum maxime porro accusamus?
                    </p>
                  </div>
                  <div>
                    <Link to="/stories">
                      <button className="button is-large is-primary">
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
      <section className="hero is-small has-background-light">
        <div className="hero-body is-flex is-justify-content-center">
          <div className="content has-text-centered">
            <p>
              <strong>Whenua O Korero</strong> by{' '}
              <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
              licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed{' '}
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC BY NC SA 4.0
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
