import React from 'react'
import Image from 'next/image';
import "./teamCell.css"
const TeamCell = ({img, details}) => {
  return (
    <div className="team-cell">
        <div className="image">
        <Image src={img} alt="Example Image" width={150}  />
        </div>
        <div className="teamName">
           <p>{details.name}</p> 
        </div>
        <div className="teamClg">
           <p>{details.clg}</p> 
        </div>
        <div className="teamPos">
           <p>{details.posistion}</p> 
        </div>
        <div className="teamDesc">
            <p>{details.dec}</p>
        </div>

      
    </div>
  )
}

export default TeamCell
