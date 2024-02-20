import React from 'react'
import img1 from "../../../public/images/image1.png"
import img2 from "../../../public/images/image2.png"
import img3 from "../../../public/images/image3.png"
import img4 from "../../../public/images/image4.png"
import img5 from "../../../public/images/image5.png"
import TeamCell from './TeamCell'
import "./Team.css"
const Team = () => {
    const team=
    [
      
        {"id": 1,
        "name": "Akshay Singhal (phD)",
        "clg": "IIT Roorkee",
        "posistion": "Co Founder Log9",
        "dec": "8 Year deep tech start-up experience at Log9. Track record of scaling up Log9 from bootstrapping to raising over $65M. Early angel investor in 5 start-ups. 30 under 30, TedX speaker, Entrepreneur of the year from ET."},
      
      
        {"id": 2,
        "name": "Kartik Hajela",
        "clg": "IIT Roorkee",
        "posistion": "Co Founder Log9",
        "dec": "8 Year deep tech start-up experience at Log9. Track record of scaling up Log9 from bootstrapping to raising over $65M. Early angel investor in 5 start-ups. 30 under 30, TedX speaker, Entrepreneur of the year from ET."},
      
      
        {"id": 3,
        "name": "Pankaj Sharma)",
        "clg": "IIT Delhi",
        "posistion": "Co Founder Log9",
        "dec": "8 Year deep tech start-up experience at Log9. Track record of scaling up Log9 from bootstrapping to raising over $65M. Early angel investor in 5 start-ups. 30 under 30, TedX speaker, Entrepreneur of the year from ET."},
     
        
        {"id": 4,
        "name": "Aditya Gupta",
    },
     
        
        {"id": 5,
        "name": "Surojit Bose",
},
        
     
    ]
  return (
    <div className="teamContainer">
      <div className="heading">
        <h2>Team</h2>
        <p className='lowerText'>Investment Committee</p>
      </div>
        <div className="topContainer">
        <TeamCell img={img1}   details={team[0]}/>
        <TeamCell img={img2}   details={team[1]}/>
        <TeamCell img={img3}   details={team[2]}/>
        </div>
        <div className="heading">
        <h1 className='lowerText'>Partners & Investment Manager</h1>
      </div>
        <div className="downContainer">
        <TeamCell img={img4}   details={team[3]}/>
        <TeamCell img={img5}   details={team[4]}/>
        </div>
    </div>
  )
}

export default Team
