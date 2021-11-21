import React from "react";
export const UpdatedExperience = () => {
  return (
    <>
      <div className="w-full bg-navy py-10 ">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="mx-auto w-full p-5  bg-navy dark:bg-gray-800 shadow rounded">
              <div className="flex flex-col items-start mb-5">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded">
                    <img
                      className="w-full h-full overflow-hidden object-cover rounded object-center"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_28.png"
                      alt="logo"
                    />
                  </div>
                  <div className="ml-2">
                    <h5 className="text-white dark:text-gray-100 font-medium text-base">
                      Fitbit Incorporation
                    </h5>
                    <p className="text-white dark:text-gray-400 text-xs font-normal">
                      San Diego, California
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="mt-4 lg:mt-0 mr-0 xl:mr-8 text-sm bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium py-2 w-48 flex justify-center">
                    Start Date: 22 Jun, 2020
                  </div>
                  <div className="mt-4 lg:mt-0 mr-0 lg:mr-4 xl:mr-8 text-sm bg-red-100 text-red-500 rounded font-medium py-2 w-48 flex justify-center">
                    End Date: 03 Dec, 2020
                  </div>
                </div>
              </div>
              <div className="flex flex-col  items-start">
                <div className="w-full pr-0 flex flex-row mb-5">
                  <span className="mr-3">✅</span>
                  <p className=" text-sm text-white dark:text-gray-400 font-normal">
                    The web has witnessed mammoth advances; however a website’s
                    success still depends on just one thing: how users interact
                    with it.
                  </p>
                </div>
                <div className="w-full pr-0 flex flex-row">
                  <span className="mr-3">✅</span>
                  <p className=" text-sm text-white dark:text-gray-400 font-normal">
                    The web has witnessed mammoth advances; however a website’s
                    success still depends on just one thing: how users interact
                    with it.
                  </p>
                </div>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </>
  );
};

export const ExperienceLayout = () => {
  return (
    <div className="min-h-screen bg-navy ">
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8  bg-black p-8">
        <div className="bg-black dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
          <UpdatedExperience />
        </div>

        <div className="bg-black dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
          <UpdatedExperience />
        </div>

        <div className="bg-black dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
          <UpdatedExperience />
        </div>
      </div>
      {/* Card code block end */}
    </div>
  );
};
