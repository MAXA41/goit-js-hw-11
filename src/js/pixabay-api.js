
import axios from "axios";

const API_KEY = "49830885-3c4fb55cab3b8487f16091a9c"

export async function getImagesByQuery(query) {
  const response = await axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });

  return response.data;
}






    
