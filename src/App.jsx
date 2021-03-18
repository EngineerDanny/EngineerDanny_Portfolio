import NavBar from "./components/NavBar";
import IntroHeader from "./components/IntroHeader";
import AboutSection from "./components/About/AboutSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className=" bg-navy text-white box-border mx-auto">
      {/* Home Section */}
      {/* <div className="flex flex-row" >
        
      </div> */}

      <NavBar />
      <section className="h-screen flex flex-row items-center">
        <div className="flex flex-col items-center mx-12">
          <div className="bg-white  h-28  my-3" style={{ width: "1px" }}></div>
          <FontAwesomeIcon icon={faGithub} size="2x" className="mb-2 w-5 h-6" />
          <FontAwesomeIcon icon={faGitlab} size="2x" className="mb-2 w-5 h-6" />

          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="mb-2 w-5 h-6"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="mb-2 w-5 h-6"
          />
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className="mb-2 w-5 h-6"
          />
          <FontAwesomeIcon
            icon={faTelegram}
            size="2x"
            className="mb-2 w-5 h-6"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="mb-2 w-5 h-6"
          />
          <div className="bg-white  h-28  my-3" style={{ width: "1px" }}></div>
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
