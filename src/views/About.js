import Banner from '../components/Banner'
import Sensei from '../components/Sensei'
import Affiliations from '../components/Affiliations'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <div className="text-center">
      <Banner />
      <Sensei />
      <Affiliations />
    </div>
  )
}

export default About