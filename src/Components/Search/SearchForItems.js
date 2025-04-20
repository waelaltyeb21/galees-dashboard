import React from "react";
import { Input } from "../ui/input";

const SearchForItems = ({ search, filterdItems }) => {
  return (
    <Input
      type="text"
      placeholder="ابحث عن كتاب او مؤلف"
      value={search}
      onChange={(e) => filterdItems(e.target.value)}
      className="border p-2 rounded-lg"
    />
  );
};

export default SearchForItems;
