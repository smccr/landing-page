import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Description from './Components/Description';
import Team from './Components/Team';
import Work from './Components/Work';
import WorkDescription from './Components/WorkDescription';
import Features from './Components/Features';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Description />
      <hr />
      <Team />
      <Work />
      <WorkDescription />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
