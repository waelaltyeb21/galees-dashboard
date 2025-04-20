"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import toast from "react-hot-toast";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import AxiosConfig from "@/Config/AxiosConfig";

const CustomModal = ({
  open = false,
  setOpen,
  selectedCategory,
  setSelectedCategory,
  data,
  setData,
}) => {
  const updateCategory = async (event, id) => {
    event.preventDefault();

    const request = await AxiosConfig.put(
      `/categories/${id}`,
      { name: event.target.category.value }
    );

    if (request.status === 200) {
      const newData = data.map((item) => {
        if (item._id === selectedCategory._id)
          return (item = { ...request.data.category });
        return item;
      });
      setData(newData);

      toast.success(request.data.message);
      setOpen(false);
    } else {
      toast.error(request.data.message);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>تعديل القسم</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <ProfileForm
          updateCategory={updateCategory}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </DialogContent>
    </Dialog>
  );
};

const ProfileForm = ({ selectedCategory, updateCategory }) => {
  return (
    <form
      className="grid items-start gap-4"
      onSubmit={(event) => updateCategory(event, selectedCategory._id)}
    >
      <div className="grid gap-2">
        <Label htmlFor="category">اسم القسم</Label>
        <Input
          type="text"
          id="category"
          name="category"
          defaultValue={selectedCategory?.name}
        />
      </div>

      {selectedCategory?.books?.length != 0 ? (
        <>
          <h3>الكتب المتوفرة في هذا القسم</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategory?.books?.map((book) => (
              <Link
                href={`/books/${book._id}`}
                className="flex gap-1  items-center bg-gray-200 py-0.5 px-2 rounded-md text-slate-900"
              >
                <span>{book.title}</span>
                <ExternalLink size={12} />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div>لا توجد كتب بهذا القسم</div>
      )}
      <Button type="submit">حفظ</Button>
    </form>
  );
};
export default CustomModal;
