import {
  AnnotationIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import TechTile from "./About/TechTile";
import node from "../assets/techs/node.png";
import react from "../assets/techs/react.svg";
import android from "../assets/techs/android.svg";
import flutter from "../assets/techs/flutter.svg";
import firebase from "../assets/techs/firebase.png";

import c from "../assets/languages/c.png";
import dart from "../assets/languages/dart.png";
import java from "../assets/languages/java.png";
import js from "../assets/languages/js.png";
import matlab from "../assets/languages/matlab.png";
import php from "../assets/languages/php.png";
import python from "../assets/languages/python.png";
import swift from "../assets/languages/swift.png";

const progLanguages = [
  {
    title: "MATLAB",
    percentage: "80%",
    icon: matlab,
  },
  {
    title: "PHP",
    percentage: "70%",
    icon: php,
  },

  {
    title: "C Programming Language",
    percentage: "85%",
    icon: c,
  },
  {
    title: "Java",
    percentage: "90%",
    icon: java,
  },
  {
    title: "Dart",
    percentage: "98%",
    icon: dart,
  },
  {
    title: "JS/TS",
    percentage: "98%",
    icon: js,
  },
  {
    title: "Swift/ObjC",
    percentage: "60%",
    icon: swift,
  },
  {
    title: "Python",
    percentage: "80%",
    icon: python,
  },
];

const frameworks = [
  {
    title: "Flutter",
    percentage: "70%",
    icon: GlobeAltIcon,
    image: flutter,
  },
  {
    title: "React/Next",
    percentage: "80%",
    icon: ScaleIcon,
    image: react,
  },
  {
    title: "Laravel",
    percentage: "90%",
    icon: AnnotationIcon,
    image: android,
  },
  {
    title: "Android/iOS",
    percentage: "98%",
    icon: AnnotationIcon,
    image: android,
  },
  {
    title: "Firebase/GCloud",
    percentage: "98%",
    icon: AnnotationIcon,
    image: firebase,
  },

  {
    title: "Node/Express",
    percentage: "80%",
    icon: AnnotationIcon,
    image: node,
  },
];

export default function UpdatedAbout() {
  return (
    <div className="py-12 bg-navy min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="   text-3xl font-extrabold tracking-wide uppercase">
            About Me
          </h2>
          {/* <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Hi! I'm Daniel, a FullStack developer
          </p> */}
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            I enjoy developing websites and mobile apps. I have been building
            wide variety of interesting projects. I love to develop performant
            and nice apps that impact the world positively. I train myself to be
            a problem solver so I try to solve problems on a daily basis.
          </p>
        </div>

        <p className="mt-10  leading-8 font-semibold tracking-tight sm:text-4xl">
          Programming Languages
        </p>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {progLanguages.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                  <img
                      src={feature.icon}
                      className="h-8 w-8 object-fill"
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium ">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <TechTile
                    title={feature.title}
                    percentage={feature.percentage}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-10  leading-8 font-semibold tracking-tight sm:text-4xl">
          Frameworks
        </p>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {frameworks.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md  bg-white text-white`}
                  >
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                    <img
                      src={feature.image}
                      className="h-8 w-8 object-fill"
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium ">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <TechTile
                    title={feature.title}
                    percentage={feature.percentage}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
