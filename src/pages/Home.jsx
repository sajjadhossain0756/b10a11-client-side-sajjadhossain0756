import { Helmet } from 'react-helmet'
import Carousel from '../components/Carousel'
import DisplayItems from '../components/DisplayItems'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lost & Found | Home Page</title>
      </Helmet>
      <Carousel />
      <DisplayItems></DisplayItems>
      <AboutUs></AboutUs>
    </div>
  )
}

export default Home
