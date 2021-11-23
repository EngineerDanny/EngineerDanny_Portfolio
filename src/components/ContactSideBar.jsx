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
    link: "https://github.com/EngineerDanny",
  },
  {
    icon: faGitlab,
    link: "https://gitlab.com/EngineerDanny",
  },
  {
    icon: faTwitter,
    link: "https://twitter.com/EngineerDevDan",
  },
  {
    icon: faInstagram,
    link: "github.io",
  },
  {
    icon: faWhatsapp,
    link: "tel:+233548215725",
  },
  {
    icon: faTelegram,
    link: "github.io",
  },
  {
    icon: faEnvelope,
    link: "mailto:agyapongdaniel7777@gmail.com",
  },
];

const ContactSideBar = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-center   pt-10">
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
      </div>
    </div>
  );
};

export default ContactSideBar;
