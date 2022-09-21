import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="mt-5 ml-5  max-w-lg ">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-300 dark:border-gray-100">
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">
                  Mentee Active
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-900">
                Rachman Kamil
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="mt-5 ml-5  max-w-xs ">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-300 dark:border-gray-100">
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">
                  Mentee Placement
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-900">
                Rachman Kamil
              </p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="mt-5 ml-5  max-w-xs ">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-300 dark:border-gray-100">
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">
                  Mentee Feedback
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-900">
                Rachman Kamil
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
