import React from 'react'

import './Loading.scss'

import loading from '../../../assets/E.mp4'

const Loading = () => {
    return (
      <div>  <video src={loading} autoPlay loop muted> </video></div>
  
  )
}

export default Loading