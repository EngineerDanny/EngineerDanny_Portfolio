import NavBar from "./components/NavBar";
import IntroHeader from "./components/IntroHeader";
import AboutSection from "./components/About/AboutSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import ContactSection from "./components/ContactSection";
import ContactSideBar from "./components/ContactSideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=" bg-navy text-white box-border mx-auto">
        <Switch>
          <Route path="/about">
            <NavBar />
            <section className="">
              <AboutSection />
            </section>
          </Route>

          <Route path="/experience">
            <NavBar />
            <section className="h-screen">
              <WorkExperience />
            </section>
          </Route>

          <Route path="/projects">
            <NavBar />
            <section className="h-screen">
              <Projects />
            </section>
          </Route>

          <Route path="/">
            <NavBar />
            <section className="h-screen flex flex-row items-center">
              <ContactSideBar />
              <IntroHeader />
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
