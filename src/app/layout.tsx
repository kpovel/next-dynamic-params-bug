import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Index layout",
};

export default function LangLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="border-red-500 border bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
