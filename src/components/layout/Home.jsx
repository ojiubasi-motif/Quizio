import AddQuiz from '../modals/AddQuiz'
import Footer from './Footer'
import Topnav from './Topnav'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col relative">
        <Topnav/>
        <Outlet/>
        <Footer/>
        {/* =====modals======= */}
        <AddQuiz/>
    </div>
  )
}

export default Home