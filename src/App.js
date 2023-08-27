import './App.css';
import './Fonts/fonts.css'
import Header from './Component/Header/Header';
import HomeIntro from './Component/Home_Intro/Home_Intro';
import HomeSummary from './Component/Home_Summary/Home_Summary';
import AboutTools from './Component/About_Tools/AboutTools';
import Experience from './Component/Experience/Experience';
import Work from './Component/Work/Work';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <>
      <Header />
      <HomeIntro />
      <HomeSummary />
      <AboutTools />
      <Experience />
      <Work />
      <Contact />
    </>
  );
}

export default App;
