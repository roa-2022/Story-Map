import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateLoggedInUser } from '../actions/loggedInUser'
import { addUser } from '../apis/users'

function Register() {
  const user = useSelector((state: any) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    username: ''
  })
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (user.username) navigate('/')
  }, [user])

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const userInfo = {
      auth0_id: user.auth0_id,
      email: user.email,
      ...form
    }
    addUser(userInfo, user.token)
      .then(() => dispatch(updateLoggedInUser(userInfo)))
      .catch((err) => setErrorMsg(err.message))
  }

  const hideError = () => {
    setErrorMsg('')
  }

  return (
    <>
    <div className="container">
      <div className="notification m-6">
      {errorMsg && <p onClick={hideError}>Error: {errorMsg}</p>}
      <form onSubmit={handleSubmit}>

            <div className="box p-4 m-4">
              <h2 className="subtitle">Complete profile set up</h2>
              <div className="mx-3">
                <div className="field">
                 
                </div>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="johndoe@gmail.com"
                      onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                  <button
                    className="button is-light mt-2"
                    disabled={!form.username}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
