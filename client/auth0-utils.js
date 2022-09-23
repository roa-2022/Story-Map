import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { updateLoggedInUser } from './actions/loggedInUser'

// eslint-disable-next-line no-unused-vars
export function useCacheUser() {
  const dispatch = useDispatch()
  const tokenInRedux = useSelector((state) =>
    Boolean(state.loggedInUser?.token)
  )

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  if (isAuthenticated && !tokenInRedux) {
    try {
      getAccessTokenSilently()
        .then((token) => {
          const userToSave = {
            auth0_id: user?.sub,
            email: user?.email,
            token: token,
          }
          dispatch(updateLoggedInUser(userToSave))
        })
        .catch((e) => e.message)
    } catch (err) {
      console.error(err)
    }
  }
}
