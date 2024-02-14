import { handleUnsupportedLang } from "@/util/handleUnsuportedLang";
import { ReactNode } from "react";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "uk" }];
}

export default async function LangLayout({
  params,
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  handleUnsupportedLang(params.lang);

  return <main>Some dumn layout{children}</main>;
}
