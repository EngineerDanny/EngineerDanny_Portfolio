import { Example } from "./components/NavBar";
import Projects from "./components/Projects/Projects";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import UpdatedAbout from "./components/UpdatedAbout";
import ContactPage from "./components/ContactPage";
import { ExperienceLayout } from "./components/UpdatedExperience";
import ResumePage from "./components/ResumePage";

function App() {
  const location = useLocation();
  return (
    <div className=" h-full bg-navy text-white  mx-auto ">
      <Example />
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
          <Route path="/resume">
            <ResumePage />
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
