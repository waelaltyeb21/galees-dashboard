import React from "react";
import CategoryList from "@/Components/CategoryContainer/CategoryList";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import AxiosConfig from "@/Config/AxiosConfig";

const getServerSideProps = async () => {
  const res = await AxiosConfig.get("/categories");
  const categories = res.data;
  return { categories };
};

const page = async () => {
  const { categories } = await getServerSideProps();
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">الاقسام</h1>
        <Link href={`/categories/create`}>
          <Button>اضافة قسم جديد</Button>
        </Link>
      </div>
      <CategoryList categories={categories} />
    </section>
  );
};

export default page;
