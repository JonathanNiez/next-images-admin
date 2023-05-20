import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="bg-white">
      <div className="items-center justify-end w-screen flex">
        <button
          className="bg-gray-300 m-2 p-2 rounded-md text-black"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <button
          className="bg-gray-300 m-2 p-2 rounded-md text-black"
          onClick={() => router.push("/users")}
        >
          Users
        </button>
        <button
          className="bg-gray-300 m-2 p-2 rounded-md text-black"
          onClick={() => router.push("/movies")}
        >
          Movies
        </button>{" "}
      </div>

      <Link
        className="text-black p-5 text-5xl text-center shadow-md m-5"
        href="/"
      >
        NextMovies Admin
      </Link>
    </header>
  );
}
