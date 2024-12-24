import { Helmet } from 'react-helmet'
import Carousel from '../components/Carousel'
import DisplayItems from '../components/DisplayItems'

const Home = () => {
  return (
    <div>
      <Helmet><title>Lost & Found/Home Page</title></Helmet>
      <Carousel />
      <DisplayItems></DisplayItems>
    </div>
  )
}

export default Home
