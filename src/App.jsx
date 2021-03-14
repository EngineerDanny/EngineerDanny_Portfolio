function App() {
  return (
    <div className=" bg-navy text-white box-border h-screen mx-auto">
      {/* 0A192F */}
      <nav className="flex flex-row p-5 items-center justify-between">
        <img src="@/public/assets/my-pic.jpg" className="" alt="MyPicture" />

        <ul className="flex flex-row items-center">
          <li class="mx-2">
            <a href="/#about">About</a>
          </li>
          <li class="mx-2">
            <a href="/#jobs">Experience</a>
          </li>
          <li class="mx-2">
            <a href="/#projects">Work</a>
          </li>
          <li class="mx-2">
            <a href="/#contact">Contact</a>
          </li>
          <li class="mx-2">
            <button className=" px-2 py-1 border-2 border-green-700  rounded-md text-green-700">
              Resume
            </button>
          </li>
        </ul>
      </nav>

      <body className="">
        <h1>Hello, I am</h1>
        <h2>Daniel Agyapong</h2>
        <h3>I build professional cross-platform apps</h3>
        <p>
          I build mobile, web and desktop apps. I love to help open-source
          community during my free times.
        </p>

        <a href="mailto:agyapongdaniel7777@gmail.com">Contact Me</a>
      </body>
    </div>
  );
}

export default App;
