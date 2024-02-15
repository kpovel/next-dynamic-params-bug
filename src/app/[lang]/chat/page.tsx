import { cookies } from "next/headers";

export default function ChatRoute({ params }: { params: { lang: string } }) {
  cookies().get("foo");

  return <h2>Chat route {params.lang}</h2>;
}
