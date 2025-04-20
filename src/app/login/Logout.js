"use client";
import { Button } from "@/Components/ui/button";
import AxiosConfig from "@/Config/AxiosConfig";
import { useRouter } from "next/navigation";
import React from "react";

const Logout = () => {
  const navigate = useRouter();
  const logout = async () => {
    try {
      const req = await AxiosConfig.post("/login/logout");
      navigate.push("/login");
      return req.data;
    } catch (error) {
      throw new Error("Something Went Wrong!");
    }
  };
  return (
    <Button onClick={logout} className="w-full my-4">
      تسجيل خروج
    </Button>
  );
};

export default Logout;
