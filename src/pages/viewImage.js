import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { deleteImageFromDB } from "./api/api";
import Link from "next/link";

export default function DeleteImage() {
  const router = useRouter();
  const { imageID, imageName, imageData, uploadDate } = router.query;

  useEffect(() => {
    console.log(router.query);
  });

  async function handleSubmit(e) {
    e.preventDefault();
    // try {
    //   const response = await axios.delete(
    //     "http://localhost/next-movies-admin/php/deleteImage.php",
    //     imageID
    //   );
    //   router.push("/images");
    //   console.error(response.data);
    // } catch (error) {
    //   console.error(error);
    //   router.push("/deleteImage");
    // }

    try {
      const response = await deleteImageFromDB(imageID);
      console.log(response);
      router.push("/images");
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteButtonClick() {
    try {
      const response = await axios.delete(
        "http://localhost/next-movies-admin/php/deleteImage.php"
      );
      router.push("/images");
      console.error(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center">
        <div className="grid grid-row-2 gap-2">
          <Link
            href="/images"
            className="text-2xl bg-gray-300 hover:bg-gray-500 p-2 rounded-md"
          >
            ◀ Back
          </Link>
          <button className="bg-red-200 hover:bg-red-400 p-2 text-center rounded-md">
            Report
          </button>
        </div>

        <form
          method="post"
          onSubmit={handleSubmit}
          className="bg-gray-100 hover:bg-gray-200 w-fit h-fit border-gray-300  border-2 m-2 p-2 rounded-xl shadow-md grid place-items-center"
        >
          <input
            type="text"
            className="text-black text-center text-2xl border-gray-300 border-2 m-2 font-bold"
            value={imageID}
            name="imageID"
            placeholder="Image ID"
            readOnly
          />
          <img
            className="rounded-md h-64 w-64 border-md border-gray-300 border-2"
            src={`/uploadedImages/${imageData}`}
            alt="image"
          />
          <input
            type="text"
            className="text-black text-center text-2xl border-gray-300 border-2 m-2"
            value={imageName}
            placeholder="Image Name"
          />
          <input
            type="text"
            className="text-black text-center text-2xl border-gray-300 border-2 m-2"
            value={uploadDate}
            placeholder="Upload Date"
          />
          <button
            type="submit"
            className="bg-red-400 hover:bg-red-600 p-2 text-center rounded-md mr-2 w-24"
          >
            Delete
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
