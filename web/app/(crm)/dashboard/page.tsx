import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="h-screen p-2 w-full">
      <div className="grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-5">
        {/* <!-- To-do --> */}
        <div className="bg-white rounded px-2 py-2">
          {/* <!-- board category header --> */}
          <div className="flex flex-row justify-between items-center mb-2 mx-1">
            <div className="flex items-center">
              <h2 className="bg-red-100 text-sm w-max px-1 rounded mr-2 text-gray-700">
                To-do
              </h2>
              <p className="text-gray-400 text-sm">3</p>
            </div>
            <div className="flex items-center text-gray-300">
              <p className="mr-2 text-2xl">---</p>
              <p className="text-2xl">+</p>
            </div>
          </div>
          {/* <!-- board card --> */}
          <div className="grid grid-rows-2 gap-2">
            <div className="p-2 rounded shadow-sm border-gray-100 border-2">
              <h3 className="text-sm mb-3 text-gray-700">Social media</h3>
              <p className="bg-red-100 text-xs w-max p-1 rounded mr-2 text-gray-700">
                To-do
              </p>
              <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                <a href="#" className="text-xs text-gray-500">
                  Sophie Worso
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">2</p>
            </div>

            <div className="p-2 rounded shadow-sm border-gray-100 border-2">
              <h3 className="text-sm mb-3 text-gray-700">
                Review survey results
              </h3>
              <p className="bg-red-100 text-xs w-max p-1 rounded mr-2 text-gray-700">
                To-do
              </p>
              <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                <a href="#" className="text-xs text-gray-500">
                  Sophie Worso
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">1</p>
            </div>

            <div className="p-2 rounded shadow-sm border-gray-100 border-2">
              <h3 className="text-sm mb-3 text-gray-700">
                Research video marketing
              </h3>
              <p className="bg-red-100 text-xs w-max p-1 rounded mr-2 text-gray-700">
                To-do
              </p>
              <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                <a href="#" className="text-xs text-gray-500">
                  Sophie Worso
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">3</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-gray-300 mt-2 px-1">
            <p className="rounded mr-2 text-2xl">+</p>
            <p className="pt-1 rounded text-sm">New</p>
          </div>
        </div>

        {/* <!-- WIP Kanban --> */}
        <div className="bg-white rounded px-2 py-2">
          {/* <!-- board category header --> */}
          <div className="flex flex-row justify-between items-center mb-2 mx-1">
            <div className="flex items-center">
              <h2 className="bg-yellow-100 text-sm w-max px-1 rounded mr-2 text-gray-700">
                WIP
              </h2>
              <p className="text-gray-400 text-sm">2</p>
            </div>
            <div className="flex items-center text-gray-300">
              <p className="mr-2 text-2xl">---</p>
              <p className="text-2xl">+</p>
            </div>
          </div>
          {/* <!-- board card --> */}
          <div className="grid grid-rows-2 gap-2">
            <div className="p-2 rounded shadow-sm border-gray-100 border-2">
              <h3 className="text-sm mb-3 text-gray-700">Blog post live</h3>
              <p className="bg-yellow-100 text-xs w-max p-1 rounded mr-2 text-gray-700">
                WIP
              </p>
              <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                <a href="#" className="text-xs text-gray-500">
                  Sophie Worso
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">Jun 21, 2019</p>
              <p className="text-xs text-gray-500 mt-2">2</p>
            </div>

            <div className="p-2 rounded shadow-sm border-gray-100 border-2">
              <h3 className="text-sm mb-3 text-gray-700">Email campaign</h3>
              <p className="bg-yellow-100 text-xs w-max p-1 rounded mr-2 text-gray-700">
                WIP
              </p>
              <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                <a href="#" className="text-xs text-gray-500">
                  Sophie Worso
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Jun 21, 2019 &#10141; Jun 21, 2019
              </p>
              <p className="text-xs text-gray-500 mt-2">1</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-gray-300 mt-2 px-1">
            <p className="rounded mr-2 text-2xl">+</p>
            <p className="pt-1 rounded text-sm">New</p>
          </div>
        </div>

        {/* <!-- Complete Kanban --> */}
        <div className="bg-white rounded px-2 py-2">
          {/* <!-- board category header --> */}
          <div className="flex flex-row justify-between items-center mb-2 mx-1">
            <div className="flex items-center">
              <h2 className="bg-green-100 text-sm w-max px-1 rounded mr-2 text-gray-700">
                Complete
              </h2>
              <p className="text-gray-400 text-sm">4</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-300 mr-2 text-2xl">---</p>
              <p className="text-gray-300 text-2xl">+</p>
            </div>
          </div>
          {/* <!-- board card --> */}
          <div className="grid grid-rows-2 gap-2">
            <div className="p-2 rounded shadow-sm border-gray-100 border-2">
              <h3 className="text-sm mb-3 text-gray-700">
                Morning emails and to-do list
              </h3>
              <p className="bg-green-100 text-xs w-max p-1 rounded mr-2 text-gray-700">
                Complete
              </p>
              <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                <a href="#" className="text-xs text-gray-500">
                  Sophie Worso
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">Jun 21, 2019</p>
              <p className="text-xs text-gray-500 mt-2">1</p>
            </div>

            <div className="p-2 rounded shadow-sm border-gray-100 border-2">
              <h3 className="text-sm mb-3 text-gray-700">Blog post</h3>
              <p className="bg-green-100 text-xs w-max p-1 rounded mr-2 text-gray-700">
                Complete
              </p>
              <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                <a href="#" className="text-xs text-gray-500">
                  Sophie Worso
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">Jun 20, 2019</p>
              <p className="text-xs text-gray-500 mt-2">5</p>
            </div>

            <div className="p-2 rounded shadow-sm border-gray-100 border-2">
              <h3 className="text-sm mb-3 text-gray-700">Reconcile accounts</h3>
              <p className="bg-green-100 text-xs w-max p-1 rounded mr-2 text-gray-700">
                Complete
              </p>
              <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                <a href="#" className="text-xs text-gray-500">
                  Sophie Worso
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">Jun 19, 2019</p>
              <p className="text-xs text-gray-600 mt-2">4</p>
            </div>

            <div className="p-2 rounded shadow-sm border-gray-100 border-2">
              <h3 className="text-sm mb-3 text-gray-700">Website AB test</h3>
              <p className="bg-green-100 text-xs w-max p-1 rounded mr-2 text-gray-700">
                Complete
              </p>
              <div className="flex flex-row items-center mt-2">
                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                <a href="#" className="text-xs text-gray-500">
                  Sophie Worso
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">Jun 18, 2019</p>
              <p className="text-xs text-gray-600 mt-2">3</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-gray-300 mt-2 px-1">
            <p className="rounded mr-2 text-2xl">+</p>
            <p className="pt-1 rounded text-sm">New</p>
          </div>
        </div>

        <div className="bg-white rounded px-2 py-2">
          {/* <!-- board category header --> */}
          <div className="flex flex-row justify-between items-center mb-2 mx-1">
            <div className="flex items-center">
              <h2 className="bg-gray-200 w-4 px-1 rounded mr-2 text-sm text-center">
                .
              </h2>
              <p className="text-gray-400 text-sm">0</p>
            </div>
            <div className="flex items-center text-gray-300">
              <p className="mr-2 text-2xl">---</p>
              <p className="text-2xl">+</p>
            </div>
          </div>
          <div className="flex flex-row items-center text-gray-300 mt-2 px-1">
            <p className="rounded mr-2 text-2xl">+</p>
            <p className="pt-1 rounded text-sm">New</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
