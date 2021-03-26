import NavBar from "./components/NavBar";
import IntroHeader from "./components/IntroHeader";
import AboutSection from "./components/About/AboutSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import ContactSideBar from "./components/ContactSideBar";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className=" bg-navy text-white box-border mx-auto">
      <NavBar />
      <ContactSideBar />
      <div className="flex flex-row items-center px-32 pt-14">
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/about">
              <section className="min-h-screen">
                <AboutSection />
              </section>
            </Route>

            <Route path="/experience">
              <section className="h-screen">
                <WorkExperience />
              </section>
            </Route>

            <Route path="/projects">
              <section className="h-screen">
                <Projects />
              </section>
            </Route>    
            
            <Route path="/">
              <section className="h-screen">
                <IntroHeader />
              </section>
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
