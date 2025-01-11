import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    // const randSearch = search[Math.floor(Math.random() * (7745 - 1 + 1) + 1 )]
    const randSearch = search[Math.floor(Math.random() * (219 - 1 + 1) + 1 )]
    // 74998
    
    window.location = `https://yewtu.be/search?q=${randSearch}`
    // window.location = `https://redditfavorites.com/r/${randSearch}`
    // window.location = `https://redditfavorites.com/?q=${randSearch}`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
