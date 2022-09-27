import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStories } from '../actions/stories'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Search() {
  const stories = useSelector((state: any) => state.stories)

  useEffect(() => {
    dispatch(fetchStories())
  }, [stories])

  const [region, setRegion] = useState('')
  const [toggle, setToggle]: any = useState(false)
  const [success, setSuccess]: any = useState(false)
  const [maoriRegion, setMaoriRegion] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStories())
  }, [])

  const changeHandlerEng = (e) => {
    setRegion(e.target.value as string)
    setToggle(true)
    setMaoriRegion('')
    setSuccess(false)
  }
  const changeHandlerMao = (e) => {
    setMaoriRegion(e.target.value as string)
    setToggle(true)
    setRegion('')
    setSuccess(false)
  }

  const clearFilter = () => {
    setMaoriRegion('')
    setRegion('')
    setToggle(false)
    setSuccess(true)
  }

  return (
    <>
      <section className="search-view hero-body is-fullwidth has-text-centered ">
        <div className="container is-fluid has-text-left m-1 p-1">
          <p className="subtitle is-size-1-desktop has-text-weight-light">
            {' '}
            Select Stories by Region
          </p>
          <form>
            <div className="field py-4">
              <label id="label ">Filter</label>
              <div className="control">
                <div className="select">
                  <select
                    className='p-1"'
                    id="demo-simple-select"
                    value={region}
                    onChange={changeHandlerEng}
                  >
                    [ <option>{region}</option>]<option>New Zealand </option>
                    <option>North Island</option>
                    <option>South Island </option>
                    <option>Northland </option>
                    <option>Auckland</option>
                    <option>Waikato</option>
                    <option>Bay of Plenty</option>
                    <option>Gisborne</option>
                    <option>Hawke's Bay</option>
                    <option>Taranaki</option>
                    <option>Manawatū-Whanganui</option>
                    <option>Wellington</option>
                    <option>Tasman</option>
                    <option>Nelson</option>
                    <option>Marlborough</option>
                    <option>West Coast</option>
                    <option>Canterbury</option>
                    <option>Otago</option>
                    <option>Southland</option>
                  </select>
                </div>
              </div>
            </div>
            <Link to="/add" className="button is-success">
              Add Story <i className="fa-regular fa-paper-plane mx-4"></i>
            </Link>
          </form>
        </div>

        <div className="container">
          <div className="cards-container">
            {region.length == 0 &&
              stories.map((story) => {
                return (
                  <>
                    <div className="column is-3">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <Link
                              style={{ textDecoration: 'none' }}
                              to={`/stories/${story.id}`}
                              key={story.id}
                            >
                              <img src={story.photo_url} alt="Story image" />
                            </Link>
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-left"></div>

                            <div className="media-content">
                              <p className="title is-5">{story.title}</p>

                              <p className="subtitle is-6">
                                Sent by: {story.author}
                              </p>
                            </div>
                          </div>
                          <div className="content">
                            <div className="media-content">
                              <p className="is-success">{story.synopsis}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <footer className="card-footer">
                            <p className="card-footer-item">
                              <Link
                                style={{ textDecoration: 'none' }}
                                to={`/stories/${story.id}`}
                                key={story.id}
                              >
                                <span>View Story</span>
                              </Link>
                            </p>
                            <IfAuthenticated>
                              <p className="card-footer-item">
                                <Link
                                  style={{ textDecoration: 'none' }}
                                  to={'#'}
                                  key={story.id}
                                >
                                  <span>Save Story</span>
                                </Link>
                              </p>
                            </IfAuthenticated>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
          </div>
        </div>

        <div className="section-container">
          <div className="cards-container">
            {region.length > 1 &&
              stories.map((story) => {
                return (
                  <>
                    {story.name == region && (
                      <div className="column is-3">
                        <div className="card">
                          <div className="card-image">
                            <figure className="image is-4by3">
                              <img src={story.photo_url} alt="Story image" />
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="is-flex is-justify-content-center">
                              <div className="card-tilte"></div>

                              <div className="">
                                <p className="title is-5">{story.title}</p>

                                <p className="subtitle is-6">
                                  Sent by: {story.author}
                                </p>
                              </div>
                            </div>
                            <div className="content">
                              <div className="media-content">
                                <p className="is-success">{story.synopsis}</p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <footer className="card-footer">
                              <p className="card-footer-item">
                                <Link
                                  style={{ textDecoration: 'none' }}
                                  to={`/stories/${story.id}`}
                                  key={story.id}
                                >
                                  <span>View Story</span>
                                </Link>
                              </p>

                              <IfAuthenticated>
                                <p className="card-footer-item">
                                  <Link
                                    style={{ textDecoration: 'none' }}
                                    to={'#'}
                                    key={story.id}
                                  >
                                    <span>Save Story</span>
                                  </Link>
                                </p>
                              </IfAuthenticated>
                            </footer>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )
              })}
          </div>
        </div>
      </section>
    </>
  )
}
