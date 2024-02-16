import React from 'react'
import Image from 'next/image';
const TeamCell = ({img, pos, dec}) => {
  return (
    <div className="team-cell">
        <div className="image">
        <Image src={logo} alt="Example Image" width={150}  />
        </div>
        <div className="teamPos">
            {pos}
        </div>
        <div className="teamDesc">
            {dec}
        </div>

      
    </div>
  )
}

export default TeamCell
