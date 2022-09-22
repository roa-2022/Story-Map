import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Stories from './Stories'
import Story from './Story'
import AddStory from './AddStory'

function App() {
  return (
    <>
      <header className="header">
        <h1>Story Map</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/stories">Stories</Link>
        <br />
        <Link to="/add">Add A Story</Link>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<Story />} />
          <Route path="/add" element={<AddStory/>} />
        </Routes>
      </section>
    </>
  )
}

export default App
