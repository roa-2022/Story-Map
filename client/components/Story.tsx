import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOneStory } from '../actions/index'
import { deleteStory } from '../apis/story'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Story() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const storyArr = useSelector((state: any) => state.stories)
  const story = storyArr[0]
  const token = useSelector((state: any) => state.user.token)

  const handleDelete = () => {
    // TODO: pass token as second parameter
    deleteStory(id, token)
    navigate('/stories')
  }

  useEffect(() => {
    dispatch(fetchOneStory(id))
  }, [])

  return (
    <>
      <div>
        <Link to={`/stories`} key={story?.id}>
          <h2>{story?.title}</h2>
        </Link>
        <ul style={{
                width:'100%',
                display: 'flex',
                margin: '20px',
                maxWidth: '100vw',
                flexWrap: 'wrap',
                padding: '20px'
        }}>
        <Card  sx={{
              display: 'flex',
              flexWrap: 'wrap',
              p: 1,
              m: 1,
              bgcolor: '',
              backgroundColor: 'rgb(252, 245, 229)',
              width: '40vw',
              height: '100vh',
              borderRadius: '20%',
              alignContent: 'flex-start'
              }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image={story?.photo_url}
              alt=""
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{padding: '40px'}}>
                {story?.title}<br></br>
                {story?.maori_name} <br></br>
                {story?.eng_name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{padding: '40px'}}>
                <p>Written By: {story?.author}</p><br></br><br></br>
                {story?.synopsis}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card  sx={{
              display: 'flex',
              flexWrap: 'wrap',
              bgcolor: '',
              backgroundColor: 'rgb(252, 245, 229)',
              width: '40vw',
              height: '100vh',
              borderRadius: '20%',
              alignContent: 'flex-start'
              }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{padding: '40px'}}>
                {story?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{padding: '30px'}} >
                {story?.author}
                {story?.story_text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </ul>
s        <button onClick={handleDelete}>Delete Story</button>
      </div>
    </>
  )
}

export default Story
