import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">الصفحة غير موجودة</h1>
        <Link href="/" className="text-blue-500 underline">
          الرجوع إلى الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
