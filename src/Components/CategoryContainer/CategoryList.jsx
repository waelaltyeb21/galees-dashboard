"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Button } from "../ui/button";
import DeleteModal from "../CustomModal/DeleteModal";
import CustomModal from "../CustomModal/CustomModal";

const CategoryList = ({ categories }) => {
  const [data, setData] = useState(categories);
  const [open, setOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [categoryID, setCategoryID] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const operation = {
    method: "delete",
    url: `http://localhost:5000/api/categories/${categoryID}`,
  };

  const ShowDeleteModal = (id) => {
    setOpen(true);
    setCategoryID(id);
  };

  const ShowEditModal = (category) => {
    setEditModalOpen(true);
    setSelectedCategory(category);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Table className="lg:md:w[50%]">
        <TableHeader>
          <TableRow className="bg-slate-500 hover:bg-slate-500">
            <TableHead className="text-right">#</TableHead>
            <TableHead className="text-right">القسم</TableHead>
            <TableHead className="text-center">الاجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((category, idx) => (
            <TableRow key={category._id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">{category.name}</TableCell>
              <TableCell className="font-medium flex justify-center items-center gap-4">
                <Button onClick={() => ShowDeleteModal(category._id)}>
                  حذف
                </Button>
                <Button onClick={() => ShowEditModal(category)}>تعديل</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Modals */}
      <DeleteModal
        itemID={categoryID}
        items={data}
        setItems={setData}
        open={open}
        setOpen={setOpen}
        operation={operation}
      />

      <CustomModal
        data={data}
        setData={setData}
        open={editModalOpen}
        setOpen={setEditModalOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default CategoryList;
