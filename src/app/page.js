import Team from '@/components/team/Team'
import Navbar from '@/components/navbar/Navbar'
import Home from '@/components/home/Home'
import Footer from '@/components/footer/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Team />
      <Footer/>
    </div>
  )
}

export default page
