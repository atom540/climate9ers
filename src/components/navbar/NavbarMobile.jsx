import Image from 'next/image'
import  './NavbarMobile.css'
import Link from 'next/link'

const NavbarMobile = () => {
  return (
    <div className="navbar_container">
    <div className="navbar_container_header">
        
      <Image
        src="/images/logo.png"
        alt=""
        width={106}
        height={27}
        className="navbar_image"
      />
      <button className="navbar_button">Login</button>
      </div>
      <div className="navbar_link">
        <Link href="#" className="navbar_sublink">
          Approach
        </Link>
        <Link href="#" className="navbar_sublink">
          Contact Us
        </Link>
        <Link href="#" className="navbar_sublink">
          About Us
        </Link>
      </div>
      <div className="navbar_line">

      </div>
    </div>
  )
}

export default NavbarMobile
