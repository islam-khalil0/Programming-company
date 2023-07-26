import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Info from "./Components/Info/Info";
import Nav from "./Components/NavBar/Nav";
import PowerPage from "./Components/PowerPage/PowerPage";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Steps from "./Components/Steps/Steps";
import Team from "./Components/Team/Team";
import Techniques from "./Components/Techniques/Techniques";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Info />
      <Services />
      <Steps />
      <Techniques />
      <Team />
      <Projects />
      <PowerPage />
      <Footer />
    </>
  );
}

export default App;
