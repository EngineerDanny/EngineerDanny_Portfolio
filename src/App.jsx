import NavBar from "./components/NavBar";
import IntroHeader from "./components/IntroHeader";
import AboutSection from "./components/About/AboutSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import ContactSideBar from "./components/ContactSideBar";

function App() {
  return (
    <div className=" bg-navy text-white box-border mx-auto">
      {/* Home Section */}
      {/* <div className="flex flex-row" >
        
      </div> */}

      <NavBar />
      <section className="h-screen flex flex-row items-center">
        <ContactSideBar />
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
