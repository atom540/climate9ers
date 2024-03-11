import Team from '@/components/team/Team'
import Home from '@/components/home/Home'
import Footer from '@/components/footer/Footer'
import NavbarWrapper from '@/components/navbar/NavbarWrapper'

const page = () => {
  return (
    <div>
      <NavbarWrapper />
      <Home/>
      <Team />
      <Footer/>
    </div>
  )
}

export default page
