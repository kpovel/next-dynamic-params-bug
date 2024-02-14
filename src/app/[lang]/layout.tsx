import { handleUnsupportedLang } from "@/util/handleUnsuportedLang";
import { ReactNode } from "react";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "uk" }];
}

export const dynamicParams = false;
export const dynamic = "force-dynamic";

export default function LangLayout({
  params,
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  handleUnsupportedLang(params.lang);

  return <main>Some dumn layout{children}</main>;
}
