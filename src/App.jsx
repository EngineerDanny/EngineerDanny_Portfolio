import NavBar from "./components/NavBar";
import IntroHeader from "./components/IntroHeader";
import AboutSection from "./components/About/AboutSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import ContactSection from "./components/ContactSection";
import ContactSideBar from "./components/ContactSideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=" bg-navy text-white box-border mx-auto">
        <NavBar />
        <ContactSideBar />
        <div className="flex flex-row items-center px-32 pt-14">
          <Switch>
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

            <Route path="/contact">
              <section className="h-screen">
                <ContactSection />
              </section>
            </Route>

            <Route path="/">
              <section className="h-screen">
                <IntroHeader />
              </section>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
