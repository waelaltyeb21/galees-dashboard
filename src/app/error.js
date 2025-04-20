"use client";
import { Button } from "@/Components/ui/button";
import React from "react";

const error = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <Button
        onClick={() => reset()}
        className="bg-red-500 hover:bg-red-700 text-white p-2 rounded mt-4"
      >
        Try again
      </Button>
    </div>
  );
};

export default error;
