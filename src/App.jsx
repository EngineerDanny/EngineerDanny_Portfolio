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
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contactDetailList = [
  {
    icon: faGithub,
    link: "github.io",
  },
  {
    icon: faGitlab,
    link: "github.io",
  },
  {
    icon: faTwitter,
    link: "github.io",
  },
  {
    icon: faInstagram,
    link: "github.io",
  },
  {
    icon: faTelegram,
    link: "github.io",
  },
  {
    icon: faEnvelope,
    link: "github.io",
  },
];

function App() {
  return (
    <div className=" bg-navy text-white box-border mx-auto">
      {/* Home Section */}
      {/* <div className="flex flex-row" >
        
      </div> */}

      <NavBar />
      <section className="h-screen flex flex-row items-center">
        <div className="flex flex-col items-center mr-20 ml-10 h-full">
          <div
            className="bg-white h-1/3  my-3 opacity-80 rounded-full"
            style={{ width: "1px" }}
          ></div>

          <a
            href="github.io"
            className="hover:text-green-500 hover:opacity-100"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="mb-4 w-4 h-5 opacity-80"
            />
          </a>

          <FontAwesomeIcon
            icon={faGitlab}
            size="2x"
            className="mb-4 w-4 h-5 opacity-80"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="mb-4 w-4 h-5 opacity-80"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="mb-4 w-4 h-5 opacity-80"
          />
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className="mb-4 w-4 h-5 opacity-80"
          />
          <FontAwesomeIcon
            icon={faTelegram}
            size="2x"
            className="mb-4 w-4 h-5 opacity-80"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="w-4 h-5 opacity-80"
          />
          <div
            className="bg-white h-1/3 rounded-full my-3 opacity-80"
            style={{ width: "1px" }}
          ></div>
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
