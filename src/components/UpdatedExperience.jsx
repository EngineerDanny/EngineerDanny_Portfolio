import React from "react";
import chosenbiz from "../assets/companies/chosen-biz.png";
import dynammite from "../assets/companies/dynammite.png";
import godlives from "../assets/companies/godlives.png";
import { CheckCircleIcon } from "@heroicons/react/solid";

const workData = [
  {
    place: "CHOSEN IT BUSINESS SOLUTIONS",
    title: "FullStack Engineer",
    start_date: "March, 2021",
    end_date: "Present",
    image: chosenbiz,
    content: [
      "Collaborate with a team of developers to improve the Farmhouse Movies App",
      "Work closely with the UI/UX designer and other developers to ensure great " +
        "user experiences across Farmhouse’s Android and iOS apps",
      "Propose and implement solutions to issues existing on the app",
      "Utilize technologies like Flutter, PHP and Digital Ocean",
    ],
  },
  {
    place: "GODLIVES",
    title: "FullStack Engineer",
    start_date: "April, 2020",
    end_date: "March, 2021",
    image: godlives,
    content: [
      "Wrote modern, performant and maintainable code for the company",
      "Developed Godlives delivery userapp with flutter",
      "Worked with a variety of languages and frameworks" +
        " such as JavaScript, Dart, Flutter and Node js",
      "Used Git and Gitlab as the main version control platform",
      "Conversed with other engineers and the techlead regularly",
    ],
  },
  {
    place: "DYNAMMITE",
    title: "Mobile Developer & Engineering Manager",
    start_date: "May, 2019",
    end_date: "November, 2019",
    image: dynammite,
    content: [
      "Utilize Java programming language for android development",
      "Use firebase as the main backend",
      "Integrate wordpress API with mobile app",
      "Communicate with creative designer to improve upon the app",
    ],
  },
];

export const UpdatedExperience = ({ experience }) => {
  return (
    <>
      <div className=" bg-navy200  rounded-xl flex hover:shadow-2xl ">
        <div className=" h-full container mx-auto flex items-start justify-center">
          {/* Card is full width. Use in 12 col grid for best view. */}
          {/* Card code block start */}
          <div className="mx-auto w-full p-7 ">
            <div className="flex flex-col items-start mb-5">
              <div className="flex items-start">
                <div className="w-20 h-16 rounded">
                  <img
                    className="w-full h-full overflow-hidden object-fill rounded object-center"
                    src={experience.image}
                    alt="logo"
                  />
                </div>
                <div className="ml-3">
                  <h5 className="text-white dark:text-gray-100 font-semibold text-base">
                    {experience.place}
                  </h5>
                  <p className="text-white dark:text-gray-400 text-sm font-normal">
                    {experience.title}
                  </p>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-start xl:items-center xl:space-y-0 space-y-2 mt-5">
                <div className="mt-4 lg:mt-0 mr-0 xl:mr-8 text-xs bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium py-2 w-48 flex justify-center">
                  Start Date: {experience.start_date}
                </div>
                <div className=" mt-4 lg:mt-0 mr-0 lg:mr-4 xl:mr-8 text-xs bg-red-100 text-red-500 rounded font-medium py-2 w-48 flex justify-center">
                  End Date: {experience.end_date}
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-start">
              {experience.content.map((value) => {
                return (
                  <div className="w-full flex flex-row mb-5">
                    <CheckCircleIcon class="h-5 w-5 text-indigo-500 mr-5 flex " />
                    <p className="flex-1 text-sm text-white dark:text-gray-400 font-normal">
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Card code block end */}
        </div>
      </div>
    </>
  );
};

export const ExperienceLayout = () => {
  return (
    <div className="min-h-screen  py-8 px-6 lg:px-16">
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8  ">
        {workData.map((value) => {
          return <UpdatedExperience experience={value} />;
        })}
      </div>
      {/* Card code block end */}
    </div>
  );
};
