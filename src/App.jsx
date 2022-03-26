import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects/Projects";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/ContactPage";
import ExperiencePage from "./components/WorkExperience/ExperiencePage";

function App() {
  const location = useLocation();
  return (
    <div className=" h-full bg-navy text-white  mx-auto ">
      <NavBar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/about">
            <AboutPage />
          </Route>
  
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
