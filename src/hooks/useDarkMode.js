import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(bool) {    
  const [darkModeIsOn, setDarkModeIsOn] = useLocalStorage(
    "darkModeIsOn",
    bool
  );
  useEffect(() => {
    if (darkModeIsOn) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkModeIsOn]);
  return [darkModeIsOn, setDarkModeIsOn];
}
