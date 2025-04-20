import BookList from "@/Components/BookContainer/BookList";
import { Button } from "@/Components/ui/button";
import AxiosConfig from "@/Config/AxiosConfig";
import Link from "next/link";
import React from "react";

const getServerSideProps = async () => {
  const res = await AxiosConfig.get("/books");
  const data = res.data;
  return { books: data.books, categories: data.categories };
};

const page = async () => {
  const { books, categories } = await getServerSideProps();

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">جميع الكتب</h1>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-4">
          <Link href={"/books/create"}>إضافة كتاب جديد</Link>
        </Button>
      </div>
      <BookList books={books} categories={categories} />
    </section>
  );
};

export default page;
