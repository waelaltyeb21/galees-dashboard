"use client";
import React, { useState } from "react";
import BookCard from "./BookCard";
import DeleteModal from "../CustomModal/DeleteModal";
import NoDataFetched from "../NoDataFetched";
import SearchForItems from "../Search/SearchForItems";
import SelectItems from "../SelectItems/SelectItems";

const DisplayBooks = ({ books, ShowDeleteModal }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {books.map((book) => (
        <BookCard
          book={book}
          key={book._id}
          ShowDeleteModal={ShowDeleteModal}
        />
      ))}
    </div>
  );
};

const BookList = ({ books, categories }) => {
  const [data, setData] = useState(books);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [bookID, setBookID] = useState("");
  const operation = {
    method: "delete",
    url: `http://localhost:5000/api/books/${bookID}`,
  };

  const ShowDeleteModal = (id) => {
    setOpen(true);
    setBookID(id);
  };

  const filteredBooks = (val) => {
    setSearch(val);
    // Filter books based on the search value
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(val.toLowerCase()) ||
        book.author.toLowerCase().includes(val.toLowerCase())
    );
    val === "" ? setData(books) : setData(filtered);
  };
  // Filter books based on the category
  const filter_based_on_category = (val) => {
    if (val == "all") {
      setData(books);
      return;
    }
    const booksByCategories = books.filter((book) => book.category._id == val);
    setData(booksByCategories);
  };
  return (
    <section>
      <div className="filters my-8 grid grid-cols-12 gap-4">
        <div className="filter_based_on_search lg:md:col-span-8 col-span-12">
          <SearchForItems search={search} filterdItems={filteredBooks} />
        </div>

        <div className="filter_based_on_category lg:md:col-span-4 col-span-12">
          <SelectItems
            text="كتب"
            items={categories}
            filterItems={filter_based_on_category}
          />
        </div>
      </div>
      <DeleteModal
        open={open}
        setOpen={setOpen}
        itemID={bookID}
        items={data}
        setItems={setData}
        operation={operation}
      />
      {data.length != 0 ? (
        <DisplayBooks ShowDeleteModal={ShowDeleteModal} books={data} />
      ) : (
        <NoDataFetched />
      )}
    </section>
  );
};

export default BookList;
