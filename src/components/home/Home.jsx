import React from 'react'
import Image from 'next/image'
import img6 from '../../../public/images/image6.jpg'
import img1 from '../../../public/images/Img1.png'
import img2 from '../../../public/images/Img2.png'
import envImg from '../../../public/images/EnvironmentImg.png'
import features from '../../../public/images/Features.png'
import './Home.css'
const Home = () => {
  return (
    <div>
      {/* top started */}
      <div className="mainContainer">
        <div className="topContainer">
          <div className="topLeftcontainer">
            <p className="textTop">WE ARE</p>
            <h1>
              Early-stage deep tech fund accelerating technologies and
              businesses to combat climate change.
            </h1>
            <button className="topContainerbtn">Get Started</button>
          </div>
          <div className="topRightContainer">
            <div className="image">
              <Image
                className="topLeftImage"
                src={img6}
                alt="Example Image"
                width={550}
              />
            </div>
          </div>
        </div>
        <div className="climateImg">
          <Image src={features} alt="img1" />
        </div>
        <div className="ImgContainer">
          <div className='img1'>
            <Image src={img1} alt="img1" />
          </div>
          <div className='img2'>
            <Image src={img2} alt="img1" />
          </div>
        </div>
        <div className='envimg'>
          <Image src={envImg}  alt="envImg" />
        </div>
      </div>
      {/* top ended */}
    </div>
  )
}

export default Home
