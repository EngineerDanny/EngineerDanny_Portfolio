function App() {
  return (
    <div className=" bg-navy text-white box-border mx-auto">
      {/* Home Section */}
      <section className="h-screen">
        <nav className="flex flex-row p-5 items-center justify-between">
          <img src="@/public/assets/my-pic.jpg" className="" alt="MyPicture" />
          <ul className="flex flex-row items-center">
            <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
              <a href="/#about">About</a>
            </li>
            <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
              <a href="/#jobs">Experience</a>
            </li>
            <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
              <a href="/#projects">Work</a>
            </li>
            <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
              <a href="/#contact">Contact</a>
            </li>
            <li class="mx-2">
              <button className="text-sm px-2 py-1 border-2 border-green-500 rounded-md text-green-500">
                Resume
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-evenly h-4/6">
          <h1 className="text-md text-green-300">Hello, I am</h1>
          <h2 className="text-6xl font-semibold">Daniel Agyapong.</h2>
          <h3 className="text-5xl font-medium opacity-80 -mt-4">
            I build professional cross-platform apps.
          </h3>
          <p className="text-base font-light max-w-lg opacity-80">
            I am a FullStack Developer and Electrical/Electronics Engineer at
            KNUST specialized in building performant mobile, web and desktop
            apps. I love to help open-source community.
          </p>
          <a
            href="mailto:agyapongdaniel7777@gmail.com"
            className="text-base p-2 border-2 border-green-500 rounded-md text-green-500 w-36 text-center"
          >
            Contact Me
          </a>
        </div>
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
      <section className="h-screen">
        <div className="flex flex-col justify-evenly h-4/6">
          {/* About section */}
          <div className="flex flex-row items-center">
            <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
            <h1 className="text-4xl font-medium opacity-80 mx-3">
              My Work Experience
            </h1>
            <div className="w-40 h-0.5 bg-gray-300 opacity-30"></div>
          </div>

          <div className="flex flex-row w-4/5 items-center">
            <p className="max-w-md text-base font-light opacity-80"></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
