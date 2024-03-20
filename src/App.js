import "./App.css";
import "./Fonts/fonts.css";
import Header from "./Component/Header/Header";
import HomeIntro from "./Component/Home_Intro/Home_Intro";
import HomeSummary from "./Component/Home_Summary/Home_Summary";
import AboutTools from "./Component/About_Tools/AboutTools";
import Experience from "./Component/Experience/Experience";
import Work from "./Component/Work/Work";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Data from "./Data/Data";
import ChatBot from "./Component/Chat_Bot/chatBot";

function App() {
  
  return (
    <>
      <Header hLinks={Data.header.hLinks} />
      <ChatBot />
      <HomeIntro typer={Data.Home_Intro.typer} />
      <HomeSummary Summary={Data.HomeSummary.Summary} />
      <AboutTools Tools={Data.About_Tools} />
      <Experience workData={Data.WorkLayout.workData} />
      <Work projects={Data.Projects} />
      <Contact contactOutro={Data.Contact} />
      <Footer />
    </>
  );
}

export default App;
