"use client";
import { useEffect } from "react";

export default function HydrationDebug() {
  useEffect(() => {
    console.log("✅ Client hydrated successfully");
  }, []);

  return null;
}
