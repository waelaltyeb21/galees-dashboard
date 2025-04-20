"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AxiosConfig from "@/Config/AxiosConfig";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosConfig.post("/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      });
      if (response.status === 200) {
        router.push("/");
        toast.success("تم تسجيل الدخول بنجاح");
      }
    } catch (error) {
      toast.error("خطأ في البريد الإلكتروني أو كلمة المرور");
      throw new Error(error);
    }
  };
  return (
    <Card className="md:w-[450px] w-full">
      <CardHeader>
        <CardTitle>تسجيل الدخول</CardTitle>
        <CardDescription>قم بتسجيل الدخول للوصول إلى المنصة</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">البريد الإلكتروني</Label>
              <Input
                id="email"
                placeholder="قم بإدخال البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                placeholder="قم بإدخال كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button className="w-full my-4">تسجيل الدخول</Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default LoginForm;
