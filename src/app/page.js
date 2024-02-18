import Team from '@/components/team/Team'
import Navbar from '@/components/navbar/Navbar'
import Home from '@/components/home/Home'

const page = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Team />
    </div>
  )
}

export default page
