import { Helmet } from 'react-helmet'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
      <Helmet><title>Lost & Found/Home Page</title></Helmet>
      <Carousel />
    </div>
  )
}

export default Home
