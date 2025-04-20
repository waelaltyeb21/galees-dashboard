import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectItems = ({
  text = "الكتب",
  items,
  defaultItem = "",
  filterItems = () => {},
}) => {
  return (
    <Select
      onValueChange={(val) => filterItems(val)}
      defaultValue={defaultItem}
    >
      <SelectTrigger className="w-full" dir="rtl">
        <SelectValue placeholder={`قم باختيار القسم`} />
      </SelectTrigger>
      <SelectContent dir="rtl">
        <SelectGroup>
          <SelectLabel>{text}</SelectLabel>
          <SelectItem value="all">الكل</SelectItem>
          {items?.map((item) => (
            <SelectItem value={item._id} key={item._id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectItems;
