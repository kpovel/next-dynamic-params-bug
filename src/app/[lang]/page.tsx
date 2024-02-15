import { cookies } from "next/headers";

export default function Page({ params }: { params: { lang: string } }) {
  if (params.lang !== "en" && params.lang !== "uk") {
    throw Error("unsupported language error");
  }
  cookies().get("foo");

  return <h2>Current lang is {params.lang}</h2>;
}

