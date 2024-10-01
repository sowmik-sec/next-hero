async function PostDetailsPage({ params }) {
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();
  return (
    <div className="text-center">
      <h2 className="text-4xl">{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default PostDetailsPage;
