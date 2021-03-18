import NavBar from "./components/NavBar";
import IntroHeader from "./components/IntroHeader";
import AboutSection from "./components/About/AboutSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import FontAwesome from "react-fontawesome";

function App() {
  return (
    <div className=" bg-navy text-white box-border mx-auto">
      {/* Home Section */}
      {/* <div className="flex flex-row" >
        
      </div> */}

      <NavBar />
      <section className="h-screen flex flex-row items-center">
        <div className="flex flex-row">
          <div className="bg-white w-1  h-5 mx-10"></div>
          <FontAwesome icon="rocket"  />
          <div className="bg-white w-1  h-5 mx-10"></div>
        </div>

        <IntroHeader />
      </section>

      {/* About Section */}
      {/* <section className="">
        <AboutSection />
      </section> */}

      {/* Work Experience Section */}
      {/* <section className="h-screen">
        <WorkExperience />
      </section> */}

      {/* Projects Section */}
      {/* <section className="h-screen">
        <Projects />
      </section> */}
    </div>
  );
}

export default App;
