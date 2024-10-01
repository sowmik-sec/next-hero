import useGetPosts from "@/services/postApi";
import Link from "next/link";

async function PostPage() {
  const postsData = await useGetPosts();
  //   console.log(postsData);
  return (
    <div>
      <h5 className="text-2xl">All posts: {postsData.length}</h5>
      <div className="grid grid-cols-4 gap-6">
        {postsData.map((post) => (
          <div key={post.id} className="border p-2 rounded-sm">
            <h2 className="text-3xl">{post.title}</h2>
            <p>{post.body}</p>
            <button className="btn bg-orange-400 text-white px-3 py-2 rounded-md mt-3">
              <Link href={`/posts/${post.id}`}>Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage;
