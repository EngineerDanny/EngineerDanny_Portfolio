function App() {
  return (
    <div className=" bg-navy text-white box-border max-w-full">
      {/* 0A192F */}
      <nav className="w-full flex flex-row p-5">
        
        <img src="./assets/my-pic.jpg" className=" h-10 w-10 object-cover" alt="MyPicture"/>
        <ul className=" w-10 flex flex-row">
          <li class="fadedown-enter-done">
            <a href="/#about">About</a>
          </li>
          <li class="fadedown-enter-done">
            <a href="/#jobs">Experience</a>
          </li>
          <li class="fadedown-enter-done">
            <a href="/#projects">Work</a>
          </li>
          <li class="fadedown-enter-done">
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <button>Resume</button>
          </li>
        </ul>
      </nav>
      <h1>Hello, I am</h1>
      <h2>Daniel Agyapong</h2>
      <h3>I build professional cross-platform apps</h3>
      <p>
        I build mobile, web and desktop apps. I love to help open-source
        community during my free times.
      </p>

      <a href="mailto:agyapongdaniel7777@gmail.com">Contact Me</a>
    </div>
  );
}

export default App;
