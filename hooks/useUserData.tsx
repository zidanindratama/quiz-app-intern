"use client";

import { useState, useEffect } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        setUserData(JSON.parse(userDataString));
      }
      setLoading(false);
    }
  }, []);

  return { userData, loading };
};

export default useUserData;
