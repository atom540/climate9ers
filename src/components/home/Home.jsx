import React from 'react'
import Image from 'next/image';
import img6 from "../../../public/images/image6.jpg"
import "./Home.css"
const Home = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="topContainer">
          <div className="topLeftcontainer">
          <p className="textTop">WE ARE</p>
          <h1>
          Early-stage deep tech fund accelerating technologies and businesses to combat climate change.
          </h1>
          <button className="topContainerbtn">Get Started</button>
          </div>
          <div className="topRightContainer">
          <div className="image">
            <Image  className="topLeftImage" src={img6} alt="Example Image" width={550} />
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
