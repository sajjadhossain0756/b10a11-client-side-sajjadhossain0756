import { Helmet } from 'react-helmet'
import Carousel from '../components/Carousel'
import DisplayItems from '../components/DisplayItems'
import AboutUs from '../components/AboutUs'
import ClientReview from '../components/ClientReview'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lost & Found | Home Page</title>
      </Helmet>
      <Carousel />
      <DisplayItems></DisplayItems>
      <AboutUs></AboutUs>
      <ClientReview></ClientReview>
    </div>
  )
}

export default Home
