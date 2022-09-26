import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStories } from '../actions'
import {
  fetchSearchedRegions,
  fetchMaoriSearchedRegions,
  fetchAddedStory,
} from '../actions/search'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Search() {
  const stories = useSelector((state: any) => state.stories)

  useEffect(() => {
    dispatch(fetchStories())
  }, [])

  const [region, setRegion] = useState('')
  const [toggle, setToggle]: any = useState(false)
  const [success, setSuccess]: any = useState(false)
  const [maoriRegion, setMaoriRegion] = useState('')

  const [files, setFiles]: any = useState([])
  const [imageURLs, setImageURLs]: any = useState([])

  const dispatch = useDispatch()

  const fileSelector = (imageList) => {
    setFiles([...imageList.target.files])
  }

  const fileUploader = async () => {
    if (files.length < 1) return
    const newImageUrls: any = []
    files.forEach((file) => newImageUrls.push(URL.createObjectURL(file)))
    await setImageURLs(newImageUrls)
    console.log(newImageUrls)

    dispatch(fetchAddedStory(newImageUrls))
  }

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
          <p className='subtitle is-size-1-desktop has-text-weight-light'> Select Stories by Region</p>
          <form>
            <div className="field py-4">
              <label id="label ">Filter</label>
              <div className="control">
                <div className="select">
                  <select className='p-1"'
                    id="demo-simple-select"
                    value={region}
                    onChange={changeHandlerEng}
                    
                  >
                    [ <option>{region}</option>]
                    <option> Aotearoa | New Zealand </option>
                    <option>Te Ika-a-Māui |North Island</option>
                    <option>Te Waipounamu | South Island </option>
                    <option>Te Tai Tokerau | Northland </option>
                    <option>Tāmaki-makau-rau | Auckland</option>
                    <option>Waikato</option>
                    <option> Te Moana-a-Toi |Bay of Plenty</option>
                    <option>Te Tai Rāwhiti | Gisborne</option>
                    <option>Te Matau-a-Māui | Hawke's Bay</option>
                    <option>Taranaki</option>
                    <option>Manawatū-Whanganui</option>
                    <option>Te Whanga-nui-a-Tara | Wellington</option>
                    <option>Te Tai-o-Aorere | Tasman</option>
                    <option>Whakatū | Nelson</option>
                    <option>Te Tauihu-o-te-waka | Marlborough</option>
                    <option>Te Tai Poutini | West Coast</option>
                    <option>Waitaha | Canterbury</option>
                    <option>Ōtākou | Otago</option>
                    <option>Murihiku | Southland</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          {success == true && (
            <article className="message is-primary">
              <div className="message-header">
                <p>Filters Cleared!</p>
              </div>
            </article>
          )}
        </div>

        {/* {/* Card section */}
        <div className="container">
          <div className="notification is-flex is-flex-wrap-wrap">
            {region.length == 0 &&
              stories.map((story) => {
                return (
                  <>
                    <div className="column is-4">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img src={story.photo_url} alt="Story image" />
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
                            {/* TODO: add link to Saved Stories */}
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
                    {story.eng_name == region && (
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
