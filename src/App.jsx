import NavBar from "./components/NavBar";
import IntroHeader from "./components/IntroHeader";

function App() {
  return (
    <div className=" bg-navy text-white box-border mx-auto">
      {/* Home Section */}
      <section className="h-screen">
        <NavBar />
        <IntroHeader/>  
      </section>

      {/* About Section */}
      <section className="h-screen">
        <div className="flex flex-col justify-evenly h-4/6">
          <div className="flex flex-row items-center">
            <div className="w-40 h-0.5  bg-gray-300 opacity-30"></div>
            <h1 className="text-4xl font-medium opacity-80 mx-3">About</h1>
            <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
          </div>
          {/* Details */}
          <div className="flex flex-row w-4/5 items-center">
            <p className="max-w-md text-base font-light opacity-80">
              Hi! I'm Daniel, a FullStack engineer based in KNUST, Ghana. I
              enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. <br />
              <br />
              My goal is to always build products that provide pixel-perfect,
              performant experiences. Shortly after graduating from Northeastern
              University, I joined the engineering team at Upstatement where I
              work on a wide variety of interesting and meaningful projects on a
              daily basis.
              <br />
              <br /> Here are a few technologies I've been working with
              recently:
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="h-screen flex items-center">
        <div className="flex flex-col h-4/6 w-full">
          {/* Work Experience Header */}
          <div className="flex flex-row items-center mb-10">
            <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
            <h1 className="text-4xl font-medium opacity-80 mx-3">
              My Work Experience
            </h1>
            <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
          </div>

          <div className="flex flex-row ">
            {/*Job Tabs Component */}
            <ul className="flex flex-col items-center content-center border-gray-300 border-l-2 mr-5  pl-3">
              <li className="text-green-500 w-48">FarmHouse</li>
              <li className=" w-48">Godlives</li>
              <li className=" w-48">Dynammite</li>
            </ul>

            {/* Job Content */}
            <div className="flex flex-col">
              {/* Job title */}
              <h3>
                <span>Engineer</span>
                <span className="">
                  &nbsp;@&nbsp;
                  <a
                    href="https://www.farmhouse.com/"
                    rel="noopener noreferrer"
                  >
                    Farmhouse
                  </a>
                </span>
              </h3>
              {/* Job duration */}
              <p className="">May 2018 - Present</p>
              <ul>
                <li>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </li>
                <li>
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  TypeScript, Gatsby, React, Craft, WordPress, Prismic, and
                  Netlify
                </li>
                <li>
                  Communicate with multi-disciplinary teams of engineers,
                  designers, producers, and clients on a daily basis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
