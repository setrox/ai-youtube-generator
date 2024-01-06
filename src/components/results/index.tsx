import React from "react";
import Header from "../header";
import TabsYT from "./tabs";

const ResultTabination = ({ data }: { data: any }) => {
  console.log({ data });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className=" h-full flex-1 flex items-center justify-center">
        <div className="w-[40%] h-full m-auto  flex flex-col items-start justify-center">
          <TabsYT data={data} />
        </div>
      </div>
    </div>
  );
};

export default ResultTabination;
