import React, { Component } from 'react'
// import Header from '../../Header/header'
import ImgSec from '../../Header/Img-Sec'
const IMGSRC = 'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg'
const IMGTitle = 'burger'
 class HomePage extends Component {
  render() {
    return (
      <div>
        
        {/* <Header /> */}

      <ImgSec src={IMGSRC} title={IMGTitle} background  />
      
      <ImgSec src={IMGSRC} title={IMGTitle} background  varian='circle' />
      
      <ImgSec src={IMGSRC} title={IMGTitle} background varian='sequre' />
      </div>
    )
  }
}

export default HomePage