import BookForm from "@/Components/BookContainer/BookForm";
import AxiosConfig from "@/Config/AxiosConfig";
import React from "react";

const getServerSideProps = async (id) => {
  const res = await AxiosConfig.get(`/books/${id}`);
  const data = res.data;
  return { book: data.book, categories: data.categories };
};

const page = async ({ params }) => {
  const { id } = await params;
  const { book, categories } = await getServerSideProps(id);
  const operation = {
    method: "put",
    url: `/books/${id}`,
  };
  return (
    <section>
      <BookForm
        data={book}
        categories={categories}
        title="تفاصيل الكتاب"
        operation={operation}
      />
    </section>
  );
};

export default page;
