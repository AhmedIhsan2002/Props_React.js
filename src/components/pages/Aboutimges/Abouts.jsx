import React, { Component } from 'react'
import IMG from '../../IMAGE/img'

import Cards from '../../Card/card'
import CARDS_DATA from '../../../mock/Cards_data'
import Array_Data from '../../../mock/Array_Data'
const IMGSRC = 'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg'
// const IMGALT = 'Car.jpg'
const IMGTITLE = 'CAR.TITLE'

export default class Abouts extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        // justifyContent:'space-around',
        alignItems:"center",
        flexDirection : 'column',
        width: '100%',
        // height: '50vh',
        backgroundColor: '#f2f3f4',
        paddingTop: '20%',
        height:'1000px'

      }}>
        
      
       {/* <IMG src={IMGSRC} title={IMGTITLE} varian='circle' background /> 
        <IMG src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png" title={IMGTITLE} varian='sequre' background />   */}
       

          {/* <Cards 
          title="my Cards" 
          imgSrc={IMGSRC} 
          imgTitle="card"   
          actions={
            <>
            
            <button>Click_Here</button>
            </>
          }
         

        cildern={
          <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, temporibus!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, temporibus!</p>
          </>
        }
         
         
        /> */}
          {/* <IMG  />  */}
      
         {/* <Cards title={CARDS_DATA[0].title} imgSrc={CARDS_DATA[0].image} describetion={CARDS_DATA[0].desc} />
         <Cards title={CARDS_DATA[1].title} imgSrc={CARDS_DATA[1].image} describetion={CARDS_DATA[1].desc} />
         <Cards title={CARDS_DATA[2].title} imgSrc={CARDS_DATA[2].image} describetion={CARDS_DATA[2].desc} /> */}

         {/* {
          CARDS_DATA.map((Card ,id) => (
            <Cards key={id} title={Card.title} imgSrc={Card.image} describetion={Card.desc} />
          ))
         } */}

         {/* <Cards title={Array_Data[0].title} imgSrc={Array_Data[0].src} describetion={Array_Data[0].describe} />
         <Cards title={Array_Data[1].title} imgSrc={Array_Data[1].src} describetion={Array_Data[1].describe} /> */}
         {/* <Cards title={Array_Data[2].title} imgSrc={Array_Data[2].src} describetion={Array_Data[0].describe} /> */}
       
       {
       Array_Data.map((Card) => (
          <Cards title={Card.title} imgSrc={Card.src} describetion={Card.describe} />
        ))
       }
         
      
     
       
        
       
     
      </div>
    );
  }
}
