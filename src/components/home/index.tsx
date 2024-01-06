"use client";
import React, { useState } from "react";
import SearchingScreen from "../search";
import ResultTabination from "../results";
import LoadingSpinner from "../loading";

const HomePage = () => {
  const [data, setData] = useState({});
  const [screen, setScreen] = useState(1);
  const [loading, setLoading] = useState(false);

  const updateData = (data: any) => {
    setData(data);
  };
  const updateScreen = (screen: number) => {
    setScreen(screen);
  };
  const updateLoading = (loading: boolean) => {
    setLoading(loading);
  };

  if (screen === 1) {
    return (
      <div className="w-full">
        <SearchingScreen
          updateLoading={updateLoading}
          loading={loading}
          updateScreen={updateScreen}
          updateData={updateData}
        />
        {loading && <LoadingSpinner />}
      </div>
    );
  }
  if (screen === 2) {
    return (
      <div className="w-full">
        <ResultTabination data={data} />
        {loading && <LoadingSpinner />}
      </div>
    );
  }
};

export default HomePage;
