import Link from "next/link";

function page() {
  return (
    <div className="p-24">
      {blogs.map((blog) => (
        <div key={blog.slug} className="border-2 p-12">
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <button className="bg-orange-400 text-white px-3 py-2 rounded-md">
            <Link href={`/blogs/${blog.slug}`}>View Description</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

const blogs = [
  {
    slug: "how-to-adopt-a-pet",
    title: "How to Adopt a Pet: A Complete Guide",
    description:
      "Discover the steps to adopting a pet, from finding the right animal to preparing your home for your new furry friend.",
  },
  {
    slug: "benefits-of-pet-adoption",
    title: "The Benefits of Pet Adoption",
    description:
      "Learn why adopting a pet is better than buying one, and how it helps reduce animal overpopulation while providing you with a loyal companion.",
  },
  {
    slug: "pet-healthcare-tips",
    title: "Essential Healthcare Tips for Your Pet",
    description:
      "Explore expert tips on keeping your pet healthy, from regular vet checkups to a balanced diet and proper exercise.",
  },
  {
    slug: "training-your-dog",
    title: "Training Your Dog: Tips for Success",
    description:
      "Master the basics of dog training with these helpful tips, from teaching simple commands to curbing unwanted behaviors.",
  },
  {
    slug: "pet-adoption-stories",
    title: "Heartwarming Pet Adoption Stories",
    description:
      "Read inspiring stories of pets finding their forever homes, and how adoption transformed both their lives and those of their owners.",
  },
];

export default page;
