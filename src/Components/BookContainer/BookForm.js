"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import SelectItems from "../SelectItems/SelectItems";
import AxiosConfig from "@/Config/AxiosConfig";
import { Switch } from "../ui/switch";

const BookForm = ({ data, categories, title, operation }) => {
  const navigate = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const IMAGE_URL = data
    ? `http://localhost:5000/Uploads/${data?.image}`
    : null;
  // Book Object
  const [book, setBook] = useState({
    id: data?._id,
    title: data?.title,
    author: data?.author,
    price: data?.price,
    category: data?.category,
    isAvailable: data?.isAvailable,
    image: IMAGE_URL,
  });

  const selectCategory = (val) => {
    setBook({ ...book, category: val });
  };

  // Send Update To Database
  const UpdateBook = async (event, options) => {
    event.preventDefault();
    setIsLoading(true);

    const updatedBookData = {
      title: book?.title,
      author: book?.author,
      price: book?.price,
      category: book?.category,
      image: event.target.image.files[0],
      isAvailable: book?.isAvailable,
      oldName: data?.image || "",
    };

    const request = await AxiosConfig[options.method](
      options.url,
      updatedBookData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (request.status === 200 || request.status === 201) {
      toast.success(request.data.message);
      navigate.replace("/books", { replace: true });
    } else {
      toast.error(request.data.message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <form
        className="flex flex-col gap-4 p-4"
        onSubmit={(event) => UpdateBook(event, operation)}
      >
        <input
          type="text"
          placeholder="عنوان الكتاب"
          name="title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          placeholder="اسم المؤلف"
          name="author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <Input
          type="number"
          placeholder="سعر الكتاب"
          name="price"
          value={book.price}
          onChange={(e) => setBook({ ...book, price: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <SelectItems
          text="الاقسام"
          items={categories}
          filterItems={selectCategory}
          defaultItem={book?.category?._id}
        />
        <Switch
          dir="rtl"
          checked={book?.isAvailable}
          onCheckedChange={(val) => setBook({ ...book, isAvailable: val })}
        />
        <Input
          type="file"
          placeholder="صورة الكتاب"
          name="image"
          onChange={(e) =>
            setBook({ ...book, image: URL.createObjectURL(e.target.files[0]) })
          }
          accepts="image/jpg, image/jpeg, image/png, image/webp"
          className="border border-gray-300 p-2 rounded"
        />
        {book?.image && (
          <img
            src={book?.image}
            alt="book"
            className="w-96 h-full object-cover rounded-md"
          />
        )}
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        >
          حفظ
        </Button>
      </form>
    </div>
  );
};

export default BookForm;
