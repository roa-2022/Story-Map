import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStories } from '../actions'
import { fetchSearchedRegions, fetchMaoriSearchedRegions, fetchAddedStory } from '../actions/search'


export default function search() {
    
    const search = useSelector((state:any) => state.search)
    const maoriSearch = useSelector((state:any) => state.maoriSearch)
    const stories = useSelector((state: any) => state.stories)

    useEffect(() => {
        dispatch(fetchStories())
      }, [])

    
    const [region, setRegion ] = useState('') 
    const [maoriRegion, setMaoriRegion ] = useState('') 
    const [files, setFiles]:any = useState([])
    const [imageURLs, setImageURLs]: any = useState([])
    const [toggle, setToggle]: any = useState(false)
    
    const dispatch = useDispatch()

    const fileSelector = (imageList) => {
        setFiles([...imageList.target.files])
    }
    
    
    const fileUploader = async () => {
        if(files.length < 1) return;
        const newImageUrls:any = []
        files.forEach(file => newImageUrls.push(URL.createObjectURL(file)))
        await setImageURLs(newImageUrls)
        console.log(newImageUrls)
    
        dispatch(fetchAddedStory(newImageUrls))
    }

    const changeHandlerEng = (e) => {
        setRegion(e.target.value)
        setToggle(true)
        setMaoriRegion('')

    }
    const changeHandlerMao = (e) => {
        setMaoriRegion(e.target.value)
        setToggle(true)
        setRegion('')
        
    }

    const clearFilter = () => {
        setMaoriRegion('')
        setRegion('')
        setToggle(false)
        
    }
  return (
    <>
        <div>
        <ul>
            {maoriRegion.length == 0 && region.length == 0 &&
            stories.map((story) => {
                return (
                <Link to={`/stories/${story.id}`} key={story.id}>
                    <li>
                    {story.title} - {story?.maori_name}
                    </li>
                </Link>
                )
            })}
        </ul>
        <ul>
            {maoriRegion.length > 1 && region.length == 0 &&
            stories.map((story) => {
                return (
                    <>
                    {story.maori_name == maoriRegion &&
                <Link to={`/stories/${story.id}`} key={story.id}>
                    <li>
                    {story.title}, {story?.maori_name}
                    </li>
                </Link>}
                    </>
                )}
                )
            }
        </ul>
        <ul>
            {region.length > 1 && maoriRegion.length == 0 &&
            stories.map((story) => {
                return (
                    <>
                    {story.eng_name == region &&
                <Link to={`/stories/${story.id}`} key={story.id}>
                    <li>
                    {story.title}, {story?.maori_name}
                    </li>
                </Link>}
                    </>
                )}
                )
            }
        </ul>
            <label>Filter By Region(English)
                <div className="input-group">
                    <label htmlFor="region_id"></label>
                    <select id="region-list" onChange = {changeHandlerEng}>
                        <option>New Zealand</option>
                        <option>North Island</option>
                        <option>South Island</option>
                        <option>Northland</option>
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
            </label>
            {/* <button onClick={() => dispatch(fetchSearchedRegions(region)) && setToggle(true)}>Click</button> */}
            {/* {region.length > 0 &&
            search?.map(story => {
                return (
                    <>
                    <h2>{story?.title}</h2>
                    <h4>{story?.story_text}</h4>
                    </>
                )
            })} */}
        </div>
        <div>
            <label>Filter By Region(Maori)
                <div className="input-group">
                    <label htmlFor="region_id"></label>
                    <select id="region_id" onChange = {changeHandlerMao}>
                        <option>Aotearoa</option>
                        <option>Te Ika-a-Māui</option>
                        <option>Te Waipounamu</option>
                        <option>Te Tai Tokerau</option>
                        <option>Tāmaki-makau-rau</option>
                        <option>Waikato</option>
                        <option>Te Moana-a-Toi</option>
                        <option>Te Tai Rāwhiti</option>
                        <option>Te Matau-a-Māui</option>
                        <option>Taranaki</option>
                        <option>Manawatū-Whanganui</option>
                        <option>Te Whanga-nui-a-Tara</option>
                        <option>Te Tai-o-Aorere</option>
                        <option>Whakatū</option>
                        <option>Te Tauihu-o-te-waka</option>
                        <option>Te Tai Poutini</option>
                        <option>Waitaha</option>
                        <option>Ōtākou</option>
                        <option>Murihiku</option>
                    </select>
                </div>
            </label>
            {/* <button onClick={() => dispatch(fetchMaoriSearchedRegions(maoriRegion)) && setToggle(true) }>Click</button> */}
            {/* {maoriRegion.length > 0 &&
                maoriSearch?.map(story => {
                    return (
                        <>
                        <h2>{story?.title}</h2>
                        <h4>{story?.story_text}</h4>
                        </>
                    ) 
                
                })
            } */}
        </div>

        {toggle == true &&
            <button onClick={clearFilter}>Clear Filters</button>}



        <div>
            <input name = "file" type= "file" onChange = {fileSelector} id = "img" accept= "image/*" ></input>
            <button onClick={fileUploader}>Upload</button>
            <img className = 'uploaded-img' src={imageURLs}/>
        </div>
    
    </>
  )
}


