export default function Page({ params }: { params: { lang: string } }) {
  return <h2>Current lang is {params.lang}</h2>;
}

