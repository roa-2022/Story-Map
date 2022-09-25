import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStories } from '../actions'
import { fetchSearchedRegions, fetchMaoriSearchedRegions, fetchAddedStory } from '../actions/search'
import Button from '@mui/material/Button'
import { Divider, FormControl, InputLabel } from '@mui/material'
import { SelectChangeEvent } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { flexbox } from '@mui/system';
import NavMUI from './NavMUI'


export default function Search() {
    
    const stories = useSelector((state: any) => state.stories)

    useEffect(() => {
        dispatch(fetchStories())
      }, [])

    const [region, setRegion ] = useState('') 
    const [toggle, setToggle]: any = useState(false)
    const [success, setSuccess]: any = useState(false)
    const [maoriRegion, setMaoriRegion ] = useState('')

    const [files, setFiles]:any = useState([])
    const [imageURLs, setImageURLs]: any = useState([])
    
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

    const styles = {
        card: {
            display: 'flex',
            margin: 10
        }
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
            <FormControl style={{width: 220, margin: '20px'}}>
                <InputLabel id="demo-simple-select-label">Filter By Name (English)</InputLabel>
                    <select 
                    id="demo-simple-select"
                    value={region}
                    onChange = {changeHandlerEng}>
                        
                       [ <option>{region}</option>]
                        <Divider/>
                        <Divider/>
                        <Divider/>
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
            </FormControl>
            <FormControl style={{width: 220, margin: '20px'}}>
            <InputLabel id="demo-simple-select-label">Filter By Name (Maori)</InputLabel>
                    <select
                    id="demo-simple-select"
                    value = {maoriRegion}
                    onChange = {changeHandlerMao}>
                        [ <option>{maoriRegion}</option>]
                        <Divider/>
                        <Divider/>
                        <Divider/>
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
            </FormControl >
            {success == true &&
                 <Stack sx={{ width: '100%', margin: '10px' }} spacing={3}>
                <Alert severity="success">Filters Cleared!</Alert>
              </Stack>}
            <ul style={{
                width:'100%',
                display: 'flex',
                margin: '20px',
                maxWidth: '100vw',
                flexWrap: 'wrap',
                padding: '20px'
        }}>
                {maoriRegion.length == 0 && region.length == 0 &&
                stories.map((story) => {
                    return (
                        <Link style={{textDecoration: 'none'}} to={`/stories/${story.id}`} key={story.id}>
                        <div style={{ width: '20%', flexWrap: 'wrap' }}>
                        <Card  sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            p: 1,
                            m: 1,
                            bgcolor: '',
                            backgroundColor: 'rgb(252, 245, 229)',
                            width: 300,
                            height: 400,
                            borderRadius: '20%',
                            alignContent: 'flex-start'
                            }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={story?.photo_url}
                            alt=""
                            />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {story?.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {story?.author}<br></br>{story?.synopsis}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                            </div>
                    </Link>
                    )
                })}
            </ul>
            <ul
            style={{
                width:'40%',
                display: 'flex',
                margin: '20px',
                flexWrap: 'wrap',
        }}      >
                {maoriRegion.length > 1 && region.length == 0 &&
                stories.map((story) => {
                    return (
                        <>
                        {story.maori_name == maoriRegion &&
                     <Link style={{textDecoration: 'none'}} to={`/stories/${story.id}`} key={story.id}>
                     <Card 
                     sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        p: 1,
                        m: 1,
                        bgcolor: '',
                        backgroundColor: 'rgb(252, 245, 229)',
                        width: 300,
                        borderRadius: '20%',
                        }}>
                     <CardActionArea>
                       <CardMedia
                         component="img"
                         height="140"
                         image={story?.photo_url}
                         alt=""
                       />
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                           {story?.title}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                           {story?.author}<br></br>{story?.synopsis}
                         </Typography>
                       </CardContent>
                     </CardActionArea>
                   </Card>
                   </Link>}
                        </>
                    )}
                    )
                }
            </ul>
            <ul
            style={{
                width:'40%',
                display: 'flex',
                margin: '20px',
                flexWrap: 'wrap'
        }}      >
                {region.length > 1 && maoriRegion.length == 0 &&
                stories.map((story) => {
                    return (
                        <>
                        {story.eng_name == region &&
                    <Link style={{textDecoration: 'none'}} to={`/stories/${story.id}`} key={story.id}>
                     <Card sx={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            p: 1,
                            m: 1,
                            bgcolor: '',
                            backgroundColor: 'rgb(252, 245, 229)',
                            width: 300,
                            borderRadius: '20%',
                            }}>
                     <CardActionArea>
                       <CardMedia
                         component="img"
                         height="140"
                         image={story?.photo_url}
                         alt=""
                       />
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                           {story?.title}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                           {story?.author}<br></br>{story?.synopsis}
                         </Typography>
                       </CardContent>
                     </CardActionArea>
                   </Card>
                   </Link>}
                        </>
                    )}
                    )
                }
            </ul>

        {toggle == true &&
            <Button variant="contained" onClick={clearFilter}>Clear Filters</Button>}




        {/* <div>
            <input name = "file" type= "file" onChange = {fileSelector} id = "img" accept= "image/*" ></input>
         <Button variant="contained"onClick={fileUploader}>Upload</Button>;
            <img className = 'uploaded-img' src={imageURLs}/>
        </div> */}
    
    </>
  )
}



 
