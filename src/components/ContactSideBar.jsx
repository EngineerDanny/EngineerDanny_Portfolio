import React from "react";
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
    icon: faWhatsapp,
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

const ContactSideBar = () => {
  return (
    <div className="fixed left-0">
      <div className="flex flex-col items-center justify-center ml-7 h-screen pt-10">
        <span
          className="bg-white h-1/3 my-4 opacity-80 rounded-full"
          style={{ width: "1px" }}
        ></span>
        {contactDetailList.map((value, index) => {
          return (
            <a
              key={index}
              href={value.link}
              className="hover:text-green-500 hover:opacity-100"
            >
              <FontAwesomeIcon
                icon={value.icon}
                size="2x"
                className="mb-4 w-4 h-5 opacity-80"
              />
            </a>
          );
        })}
        <span
          className="bg-white h-1/3 rounded-full mb-3 opacity-80"
          style={{ width: "1px" }}
        ></span>
      </div>
    </div>
  );
};

export default ContactSideBar;
