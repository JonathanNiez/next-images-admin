import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "http://localhost/next-movies-admin/php/users.php"
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  function loadUsers() {
    return (
      Array.isArray(users) &&
      users.map(function (u, index) {
        return (
          <div
            className="border-gray-400 hover:bg-gray-200 border h-auto w-96 rounded-xl shadow-md p-3"
            key={index}
          >
            <h1 className=" text-black text-center text-lg font-bold">
              UserID: {u.userID}
            </h1>
            <h1 className="text-black text-center text-lg">
              Username: {u.username}
            </h1>
            <h1 className=" text-black text-center text-lg">
              Email: {u.email}
            </h1>
            <button className="bg-red-400 hover:bg-red-600 p-2 text-center  rounded-md">
              Delete
            </button>
          </div>
        );
      })
    );
  }

  return (
    <div>
      <NavBar />

      <div className="grid gap-4 grid-cols-4 h-full place-items-center justify-center">
        {loadUsers()}
      </div>
      <Footer />
    </div>
  );
}
