import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { Trash } from "lucide-react";

const BookCard = ({ book, ShowDeleteModal }) => {
  const IMAGE_URL = `http://localhost:5000/Uploads/${book.image}`;
  return (
    <div
      className={`grid grid-cols-12 gap-4 p-2 mb-4 rounded-md shadow-md border-2 ${
        book.isAvailable ? "border-green-400" : "border-red-400"
      }`}
    >
      <div className="col-span-4">
        <Image
          src={IMAGE_URL}
          alt={book.title}
          width={200}
          height={200}
          priority={true}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="col-span-8 grid p-2">
        <div className="my-2">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-semibold text-wrap">{book.title}</h1>
            <Trash size={"1rem"} onClick={() => ShowDeleteModal(book._id)} />
          </div>
          <div className="flex flex-wrap items-center *:text-gray-700 *:font-semibold">
            <p>{book.author}</p>
            <span className="px-1">-</span>
            <p>{book?.category?.name}</p>
            <span className="px-1">-</span>
            <p>{book.price}</p>
          </div>
        </div>
        <Button>
          <Link href={`/books/${book._id}`} className="w-full h-full">
            تفاصيل الكتاب
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
