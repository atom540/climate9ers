/** @format */

import React from "react";
import Image from "next/image";
import img6 from "../../../public/images/image6.jpg";
import img7 from "../../../public/images/image7.png";
import img8 from "../../../public/images/image8.png";
import img1 from "../../../public/images/Img1.png";
import img2 from "../../../public/images/Img2.png";
import envImg from "../../../public/images/EnvironmentImg.png";
import features from "../../../public/images/Features.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      {/* top started */}
      <div className="mainContainer">
        <div className="topContainer">
          <div className="topLeftcontainer">
            <p className="textTop">WE ARE</p>
            <h1 className="textTopHeading">
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
          <div className="img1">
            <Image src={img1} alt="img1" />
          </div>
          <div className="img2">
            <Image src={img2} alt="img1" />
          </div>
        </div>
        <div className="envimg">
          <Image src={envImg} alt="envImg" width={800} height={450}/>
        </div>
        {/* top ended */}

        <div className="middleContainer">
          <div className="middleLeftcontainer">
            <h2 className="textTop">
              Tech Entrepreneurs holds the key to net zero{" "}
            </h2>
            <p>
              The scale of problem is huge, we emit 51bn tons of CO2 annually.
              50% of coral reef is lost and the planet’s average temperature has
              increased by 1.1 °C. We need technological solution that can scale
              fast in almost all sectors. Atclimate9ers we want to fund
              entrepreneurs with revolutionary ideas, enable them with. Our
              network and reach to scale their volume. And help accelerate
              technologies that will heal and stabilize the ecology of our
              planet.
            </p>
          </div>
          <div className="middleRightContainer">
            <div className="image">
              <Image
                className="topLeftImage"
                src={img7}
                alt="Example Image"
                width={370}
                height={550}
              />
            </div>
          </div>
        </div>
        <div className="bottomContainer">
          <h1 className="bottomContainerHeading">Focus area</h1>
          <div className="bottomContainerImg">
            <Image
              className="bottomContainerImg"
              src={img8}
              alt="Example Image"
              width={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
