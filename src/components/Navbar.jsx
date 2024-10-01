"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const links = [
    {
      title: "About",
      path: "/about",
    },

    {
      title: "Services",
      path: "/services",
    },

    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
  ];
  const handler = () => {
    router.push("/login");
  };
  if (pathName.includes("dashboard")) {
    <div className="bg-green-400 p-6">Dashboard Layout</div>;
  } else {
    return (
      <nav className="bg-emerald-400 px-6 py-4 flex justify-between items-center">
        <h6>
          Next <span className="text-red-900">Hero</span>
        </h6>
        <ul className="flex space-x-4">
          {links?.map((link) => (
            <li key={link.title}>
              <Link
                className={`${pathName === link.path ? "text-purple-500" : ""}`}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        {!session.status === "authenticated" ? (
          <button onClick={handler} className="bg-white text-cyan-400 p-2">
            Login
          </button>
        ) : (
          <button onClick={handler} className="bg-white text-cyan-400 p-2">
            Logout
          </button>
        )}
      </nav>
    );
  }
}

export default Navbar;
