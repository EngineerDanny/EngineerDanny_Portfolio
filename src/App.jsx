import {Example} from "./components/NavBar";
import IntroHeader from "./components/IntroHeader";
import AboutSection from "./components/About/AboutSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import ContactSideBar from "./components/ContactSideBar";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import UpdatedAbout from "./components/UpdatedAbout";
import ContactPage from "./components/ContactPage";
import {ExperienceLayout} from "./components/UpdatedExperience";



function App() {
  const location = useLocation();
  return (
    <div className=" h-full bg-navy text-white  mx-auto">
      <Example />
      {/* <ContactSideBar /> */}
      
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/about">
              <UpdatedAbout />
            </Route>

            <Route path="/experience">
              <ExperienceLayout />
              
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/contact">
              <ContactPage />
            </Route>

            <Route path="/">
              <HeroSection />
            </Route>
          </Switch>
        </AnimatePresence>
      
    </div>
  );
}

export default App;
