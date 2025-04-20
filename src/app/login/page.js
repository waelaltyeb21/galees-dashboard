import LoginForm from "./LoginForm";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

const page = async () => {
  // const token = (await cookies()).get("token");
  // if (token) return redirect("/");

  return (
    <section className="flex justify-center items-center h-[calc(100vh-100px)]">
      <LoginForm />
    </section>
  );
};

export default page;
