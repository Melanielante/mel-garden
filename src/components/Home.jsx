import React from 'react'

 function Home({ username, favoritePlant}) {
  return (
    <div>
        <h2>Welcome, {username} </h2>
        <p>We heard your favorite plant is {favoritePlant}! </p>
    </div>
  )
}

export default Home;