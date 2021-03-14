function App() {
  return (
    <div className=" bg-navy text-white box-border mx-auto">
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

      <section className="h-screen">
        <div className="flex flex-col justify-evenly h-4/6">
          <h1 className="text-md text-green-300">Hello, I am</h1>
          <h2 className="text-6xl font-semibold">Daniel Agyapong</h2>
          <h3 className="text-5xl font-medium opacity-80 -mt-4">
            I build professional cross-platform apps
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

      <section className="flex flex-col justify-evenly h-4/6">
        <h1 className="text-md text-green-300">Hello, I am</h1>
        <h2 className="text-6xl font-semibold">Daniel Agyapong</h2>
        <h3 className="text-5xl font-medium opacity-80 -mt-4">
          I build professional cross-platform apps
        </h3>
        <p className="text-base font-light max-w-lg opacity-80">
          I am a FullStack Developer and Electrical/Electronics Engineer at
          KNUST specialized in building performant mobile, web and desktop apps.
          I love to help open-source community.
        </p>

        <a
          href="mailto:agyapongdaniel7777@gmail.com"
          className="text-base p-2 border-2 border-green-500 rounded-md text-green-500 w-36 text-center"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}

export default App;
