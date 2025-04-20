// "use client"
import React from "react";
import BookForm from "@/Components/BookContainer/BookForm";
import AxiosConfig from "@/Config/AxiosConfig";

const GetData = async () => {
  const res = await AxiosConfig.get(`/categories`);
  const categories = res.data;
  return { categories };
};

const page = async () => {
  const { categories } = await GetData();
  const operation = {
    method: "post",
    url: `/books/create`,
  };

  return (
    <section>
      <div className="FormContainer">
        <BookForm
          categories={categories}
          title="إضافة كتاب جديد"
          operation={operation}
        />
      </div>
    </section>
  );
};

export default page;
