"use Client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import AxiosConfig from "@/Config/AxiosConfig";

const DeleteModal = ({
  open = false,
  setOpen,
  itemID,
  items,
  setItems,
  operation,
}) => {
  const HandleDelete = async () => {
    const DeleteBook = await AxiosConfig[operation.method](operation.url);
    // Message
    if (DeleteBook.status === 200) {
      const FilterdData = items.filter((item) => item._id !== itemID);
      setItems(FilterdData);
      toast.success(DeleteBook.data.message);
    } else toast.error(DeleteBook.data.response.message);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen} dir="rtl">
      <DialogContent className="sm:max-w-[425px]" dir="rtl">
        <DialogHeader dir="rtl">
          <DialogTitle>تنبيه !</DialogTitle>
          <DialogDescription>
            هل انت متأكد من أنك تريد حذف هذا الكتاب؟
            <br />
            <span className="text-red-500">هذا الاجراء غير قابل للتراجع</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={HandleDelete}>حذف</Button>
          <Button onClick={() => setOpen(false)}>الغاء</Button>
        </DialogFooter>
        {/* <ProfileForm /> */}
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
