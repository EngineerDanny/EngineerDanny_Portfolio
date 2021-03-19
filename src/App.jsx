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
        <div className="flex flex-col items-center mr-20 ml-10 h-full">
          <span
            className="bg-white h-1/3  my-4 opacity-80 rounded-full"
            style={{ width: "1px" }}
          ></span>

          <ContactSideBar />

          <span
            className="bg-white h-1/3 rounded-full mb-3 opacity-80"
            style={{ width: "1px" }}
          ></span>
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
