import React from 'react'

function About({ bio }) {
  return (
    <div>
        <h2>About the Garden</h2>
        {bio ? <p>{bio}</p> : null}
    </div>
  )
}

export default About;