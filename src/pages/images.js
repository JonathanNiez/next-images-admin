import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import DeleteImage from "./viewImage";

export default function Movies() {
  const [image, setImage] = useState([]);

  const router = useRouter();

  function handleButtonClick(index) {
    const imageQuery = {
      imageID: index.imageID,
      imageName: index.imageName,
      imageData: index.imageData,
      uploadDate: index.uploadDate,
    };

    router.push({
      pathname: "/viewImage",
      query: imageQuery,
    });
  }

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.post(
          "http://localhost/next-movies-admin/php/images.php"
        );
        setImage(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchImages();
  }, []);

  function loadImages() {
    return (
      Array.isArray(image) &&
      image.map(function (i, index) {
        return (
          <div
            className="bg-gray-100 hover:bg-gray-200 w-80 h-fit border-gray-300  border-2 m-2 p-2 rounded-xl shadow-md grid place-items-center"
            key={index}
          >
            <h1 className="text-black text-center text-1xl font-bold">
              Image ID: {i.imageID}
            </h1>
            <img
              className="flex rounded-md h-64 w-64 border-md border-gray-300 border-2"
              src={`/uploadedImages/${i.imageData}`}
              alt="image"
            />
            <h1 className="text-black text-center text-lg">
              Image Name: {i.imageName}
            </h1>
            <h1 className="text-black text-center text-lg">
              Uploaded On: {i.uploadDate}
            </h1>
            <button
              className="bg-blue-400 w-full hover:bg-blue-600 p-2 text-center rounded-md mr-3"
              onClick={() => handleButtonClick(i)}
            >
              View
            </button>
          </div>
        );
      })
    );
  }

  return (
    <div>
      <NavBar />
      <div className="mb-24 pb-10 p-2 grid gap-2 grid-cols-4 h-auto place-items-center justify-center">
        {" "}
        {loadImages()}
      </div>{" "}
      <Footer />
    </div>
  );
}
