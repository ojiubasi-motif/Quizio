import Footer from './Footer'
import Topnav from './Topnav'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col relative">
        <Topnav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Home