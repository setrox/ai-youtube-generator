"use client";

import React, { useState } from "react";
import SearchingScreen from "../search";

const HomePage = () => {
  const [screen, setScreen] = useState(1);

  return (
    <div className="w-full">
      <SearchingScreen />
    </div>
  );
};

export default HomePage;
