import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import AboutUs from '../components/AboutUs';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <AboutUs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home;