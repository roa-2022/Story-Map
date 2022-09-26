import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOneStory } from '../actions/index'
import { deleteStory } from '../apis/story'

function Story() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const storyArr = useSelector((state: any) => state.stories)
  const story = storyArr[0]
  const token = useSelector((state: any) => state.user.token)

  const handleDelete = () => {
    deleteStory(id, token)
    navigate('/stories')
  }

  useEffect(() => {
    dispatch(fetchOneStory(id))
  }, [story])

  return (
    <>
      {story && (
        <div>
          <Link to={`/stories`} key={story.id}>
            <h2>{story.title}</h2>
          </Link>
          <p>
            {story.maori_name} aka {story.eng_name}
          </p>
          <p>{story.author}</p>
          <p>{story.story_text}</p>
          <img src={story.photo_url} />
          <button onClick={handleDelete}>Delete Story</button>
          <button onClick={() => navigate('/stories/{story.id}/update')}>
            Update Story
          </button>
        </div>
      )}
    </>
  )
}

export default Story
