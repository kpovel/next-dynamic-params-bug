import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "lang pages",
};

export default function LangLayout({
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  return (
    <div className="border-blue-800 border bg-gray-300">
      Lang layout {children}
    </div>
  );
}
