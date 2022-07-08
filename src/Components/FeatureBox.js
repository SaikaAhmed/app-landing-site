import React from 'react'

export default function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>Learn new things and Enjoy!</p>
            </div>
            
            </div>
  )
}
