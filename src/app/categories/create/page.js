"use client";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import AxiosConfig from "@/Config/AxiosConfig";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [category, setCategory] = useState("");
  const navigate = useRouter();

  const HandleForm = async (event) => {
    event.preventDefault();
    try {
      const request = await AxiosConfig.post(
        `/categories/create`,
        { name: category }
      );
      if (request.status === 201) {
        toast.success(request.data.message);
        navigate.push("/categories");
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
      throw new Error(error);
    }
  };
  return (
    <section>
      <h1>اضافة قسم جديد</h1>
      <form onSubmit={HandleForm}>
        <Input
          type="text"
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="اسم القسم"
          className="my-4"
        />
        <Button type="submit" className="w-full">
          اضافة
        </Button>
      </form>
    </section>
  );
};

export default page;
