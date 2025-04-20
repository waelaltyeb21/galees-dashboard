import { Zain } from "next/font/google";
import "./globals.css";
import Toast from "@/Components/ui/Toast";
import Header from "@/Components/Header/Header";

const zain = Zain({
  weight: ["400", "700"],
  variable: "--font-zain-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "مكتبة جليس",
  description: "جليسك لرحلة في عالم الكتب",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${zain.variable} antialiased`}>
        <Header />
        <main className="lg:p-16 px-8 py-20">{children}</main>
        <Toast />
      </body>
    </html>
  );
}
