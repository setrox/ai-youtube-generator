import React, { useState } from "react";
import SearchMenu from "./search";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "../header";

const SearchingScreen = ({
  updateData,
  updateScreen,
  updateLoading,
  loading,
}: {
  updateData: any;
  updateScreen: any;
  updateLoading: any;
  loading: any;
}) => {
  return (
    <div className="min-h-screen flex flex-col  ">
      <Header />
      <div className=" h-full flex-1 flex items-center justify-center">
        <div className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[40%]   h-full m-auto  flex flex-col items-start justify-center">
          <div>
            <h1 className=" capitalize text-4xl font-bold">
              Enter prompt to generate
            </h1>
            <div className="flex mt-4 flex-col gap-2 text-md mb-12 pl-6">
              <div className="flex items-center  gap-5">
                <FaArrowRightLong />
                <p> Title</p>
              </div>
              <div className="flex items-center  gap-5">
                <FaArrowRightLong />
                <p> Description</p>
              </div>
              <div className="flex items-center  gap-5">
                <FaArrowRightLong />
                <p> Tags</p>
              </div>
            </div>
          </div>
          <div className="px-2 w-full">
            <SearchMenu
              updateLoading={updateLoading}
              loading={loading}
              updateScreen={updateScreen}
              updateData={updateData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingScreen;
