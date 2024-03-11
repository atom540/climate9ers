import Team from '@/components/team/Team'
import Navbar from '@/components/navbar/Navbar'
import Home from '@/components/home/Home'
import Footer from '@/components/footer/Footer'
import NavbarMobile from '@/components/navbar/NavbarMobile'

const page = () => {
  return (
    <div>
      <NavbarMobile />
      <Home/>
      <Team />
      <Footer/>
    </div>
  )
}

export default page
