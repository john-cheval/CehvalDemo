"use client";
import { useEffect } from "react";

const UnloadWarning = ({ enabled }) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [enabled]);
  return null;
};

export default UnloadWarning;
