import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "lang pages",
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "uk" }];
}

export const dynamicParams = false;

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
