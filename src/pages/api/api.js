import axios from "axios";

const API_BASE_URL = "http://localhost/next-movies-admin/php";

export async function uploadImageToDB(imageData) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/uploadImage.php`,
      imageData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function deleteImageFromDB(imageID) {
  try {
    const response = await axios.post(`${API_BASE_URL}/deleteImage.php`, {
      imageID,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function updateImageFromDB(imageID) {
  try {
    const response = await axios.post(`${API_BASE_URL}/updateImage.php`, {
      imageID,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
