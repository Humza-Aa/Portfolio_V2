import './App.css';
import './Fonts/fonts.css'
import Header from './Component/Header/Header';
import HomeIntro from './Component/Home_Intro/Home_Intro';
import HomeSummary from './Component/Home_Summary/Home_Summary';
import AboutTools from './Component/About_Tools/AboutTools';


function App() {
  return (
    <>
      <Header />
      <HomeIntro />
      <HomeSummary />
      <AboutTools />
    </>
  );
}

export default App;
