export default async function ChatRoute({ params }: { params: { lang: string } }) {
  return <h2>Chat route {params.lang}</h2>;
}
