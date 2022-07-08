import React from 'react'

export default function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>We helps to promote or landing your fresh new app. At first we see your Creativity and then decide to launch your app by website.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}
