"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
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
  ];
  const handler = () => {
    router.push("/login");
  };
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
      <button onClick={handler} className="bg-white text-cyan-400 p-2">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
