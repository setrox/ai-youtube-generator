import React from "react";
import { makeHttpRequest } from "./api";

const useHttp = () => {
  const searchQuery = (params: any, successCB: any, failCB: any) => {
    makeHttpRequest("/search", params)
      .then((responseData) => {
        if (successCB) successCB(responseData);
      })
      .catch((error) => {
        console.error("Error in HTTP request:", { error });
        if (error && failCB) failCB(error);
      });
  };

  return {
    searchQuery,
  };
};

export default useHttp;
