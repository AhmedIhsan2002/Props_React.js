import React, { Component } from 'react'
import IMG from '../IMAGE/img'
 class Cards extends Component {
   
  render() {
    const {
        title,
        cildern,
        imgSrc,
        actions,
        imgTitle,
        describetion
    } = this.props
    return (
      <div>
        <header>
            <h1>{title}</h1>
        </header>

        {/* <p>{description}</p> */}

        

      {imgSrc && <IMG src={imgSrc} title={imgTitle} /> }

      <p>{describetion}</p>

       <section style={{
        // textAlign: "center",
        color:"#000",
        fontSize:'20px',
        marginBottom:'20px'
       }}>{cildern}</section>

        <footer>
          {actions}
        </footer>
      </div>
    )
  }
}
export default Cards