import NavBar from "./components/NavBar";
import IntroHeader from "./components/IntroHeader";
import AboutSection from "./components/AboutSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <div className=" bg-navy text-white box-border mx-auto">
      {/* Home Section */}
      <section className="h-screen flex flex-col justify-between">
        <NavBar />
        <IntroHeader />
      </section>

      {/* About Section */}
      <section className="h-screen">
        <AboutSection />
      </section>

      {/* Work Experience Section */}
      <section className="h-screen">
        <WorkExperience />
      </section>
    </div>
  );
}

export default App;
