import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="bg-white shadow-gray-500 shadow-sm mb-5">
      <div className="grid grid-cols-2 gap-3">
        <Link
          className="text-black p-5 text-5xl col-start-1 col-end-2"
          href="/"
        >
          NextImages Admin
        </Link>
        <div className="col-start-2 col-end-2 flex items-center justify-end">
          <button
            className="bg-gray-300 m-2 p-2 rounded-md text-black"
            onClick={() => router.push("/users")}
          >
            Users
          </button>{" "}
          <button
            className="bg-gray-300 m-2 p-2 rounded-md text-black"
            onClick={() => router.push("/images")}
          >
            Image
          </button>
        </div>
      </div>
    </header>
  );
}
