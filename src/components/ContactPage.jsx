import React from "react";
function ContactPage() {
  return (
    <div className="container mx-auto pt-16 min-h-screen">
      <div className="lg:flex">
        <div className="xl:w-2/5 lg:w-2/5  bg-navy200 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
              Get in touch
            </h1>
            <p className="text-xl  pb-8 leading-relaxed font-normal lg:pr-4 text-gray-400">
              Got a question about me? Are you interested in hiring me? Have
              some suggestions or just want to say Hi? Just contact me and say
              Hello.
            </p>
            
            <a
              href="tel:+233548215725"
              className="text-white hover:underline  cursor-pointer"
            >
              <div className="flex pb-4 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </div>
                <p className="pl-4 text-white text-base">+233 548 215 725</p>
              </div>
            </a>
            <a
              href="mailto:agyapongdaniel7777@gmail.com"
              className="text-white hover:underline  cursor-pointer"
            >
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                <p className="pl-4 text-base">agyapongdaniel7777@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5  h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br bg-navy200">
          <form id="contact" className="py-4 px-8 rounded-tr rounded-br">
            <h1 className="text-4xl text-white font-extrabold mb-6">
              Enter Details
            </h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="full_name"
                    className="text-gray-400 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    id="full_name"
                    name="full_name"
                    type="text"
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border text-black"
                    placeholder
                  />
                </div>
              </div>
              <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-400 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border text-black"
                    placeholder
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-gray-400 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Phone
                  </label>
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border text-black"
                    placeholder
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label
                  className="text-gray-400 text-sm font-semibold  mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  placeholder
                  name="message"
                  className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700 text-black"
                  rows={8}
                  id="message"
                  defaultValue={""}
                />
              </div>
              <a
                type="submit"
                href="mailto:agyapongdaniel7777@gmail.com"
                className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
              >
                Submit
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
