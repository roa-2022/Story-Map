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

function Stories() {
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

  const styles = {
    card: {
      display: 'flex',
      margin: 10,
    },
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
      <section className="section-search">
        <div className="hero-body">
          <div className="box">
            <form action="">
              <div className="field">
                <label id="demo-simple-select-label">
                  Filter By Region (English)
                </label>
                <div className="control">
                  <select
                    id="demo-simple-select"
                    value={region}
                    onChange={changeHandlerEng}
                  >
                    [ <option>{region}</option>]
                    <option className="dropdown-item">New Zealand</option>
                    <option className="dropdown-item">North Island</option>
                    <option className="dropdown-item">South Island</option>
                    <option className="dropdown-item">Northland</option>
                    <option className="dropdown-item">Auckland</option>
                    <option className="dropdown-item">Waikato</option>
                    <option className="dropdown-item">Bay of Plenty</option>
                    <option className="dropdown-item">Gisborne</option>
                    <option className="dropdown-item">Hawke's Bay</option>
                    <option className="dropdown-item">Taranaki</option>
                    <option className="dropdown-item">Manawatū-Whanganui</option>
                    <option className="dropdown-item">Wellington</option>
                    <option className="dropdown-item">Tasman</option>
                    <option className="dropdown-item">Nelson</option>
                    <option className="dropdown-item">Marlborough</option>
                    <option className="dropdown-item">West Coast</option>
                    <option className="dropdown-item">Canterbury</option>
                    <option className="dropdown-item">Otago</option>
                    <option className="dropdown-item">Southland</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label id="demo-simple-select-label">
                  Filter By Region (Maori)
                </label>
                <div className="control">
                  <select
                    id="demo-simple-select"
                    value={maoriRegion}
                    onChange={changeHandlerMao}
                  >
                    [ <option>{maoriRegion}</option>]
                    <option className="dropdown-item">Aotearoa</option>
                    <option className="dropdown-item">Te Ika-a-Māui</option>
                    <option className="dropdown-item">Te Waipounamu</option>
                    <option className="dropdown-item">Te Tai Tokerau</option>
                    <option className="dropdown-item">Tāmaki-makau-rau</option>
                    <option className="dropdown-item">Waikato</option>
                    <option className="dropdown-item">Te Moana-a-Toi</option>
                    <option className="dropdown-item">Te Tai Rāwhiti</option>
                    <option className="dropdown-item">Te Matau-a-Māui</option>
                    <option className="dropdown-item">Taranaki</option>
                    <option className="dropdown-item">Manawatū-Whanganu</option>
                    <option className="dropdown-item">Te Whanga-nui-a-Tara</option>
                    <option className="dropdown-item">Te Tai-o-Aorere</option>
                    <option className="dropdown-item">Whakatū</option>
                    <option className="dropdown-item">Te Tauihu-o-te-waka</option>
                    <option className="dropdown-item">Te Tai Poutini</option>
                    <option className="dropdown-item">Waitaha</option>
                    <option className="dropdown-item">Ōtākou</option>
                    <option className="dropdown-item">Murihiku</option>
                  </select>
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
        </div>
      </section>
      <section className="container is-widescreen ">
        <div className="hero-body ">
          <div className="cards-container">
            {maoriRegion.length == 0 &&
              region.length == 0 &&
              stories.map((story) => {
                return (
                  // <div className="container has-text-centered">
                  //   <div className="columns is-mobile is-centered">
                  <div className="column is-4">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-2by1">
                          <img src={story.photo_url} alt="Story image" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-left">                        
                          </div>

                          <div className="media-content">
                            <p className="title is-">{story.title}</p>

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
                  //   </div>
                  // </div>
                )
              })}
          </div>
        </div>
      </section>
    </>
    )
}

export default Stories
