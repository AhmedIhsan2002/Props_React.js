import React from 'react'
import './img.css'


const IMG = (props) => {
    const  {background , src , title , varian  } = props
  return (
   <>
   <section className={`image__cont ${props.background ? 'background__coloer' : ''}` }>
   <div>
      <img src={props.src} alt={props.title} title={props.title} className={props.varian === 'circle'? 'circle' : 'sequre'} />
    </div>
    
   </section>
   
   </>
  )
}

export default IMG
