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
            className="border-gray-300 hover:bg-gray-100 border h-auto w-96 p-2 rounded-xl m-2 shadow-md gird grid-rows-1"
            key={index}
          >
            <h1 className=" text-black text-center text-2xl font-bold">
              UserID: {u.userID}
            </h1>
            <h1 className="text-black text-lg">Username: {u.username}</h1>
            <h1 className=" text-black text-center text-lg">
              Email: {u.email}
            </h1>
          </div>
        );
      })
    );
  }

  return (
    <div>
      <NavBar />

      <div className="p-2 bg-gray-200 grid gap-10 grid-cols-6 h-auto place-items-center justify-center">
        {" "}
        {loadUsers()}
      </div>
      <Footer />
    </div>
  );
}
