import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "67daff5fd4ad489c8cc37ce4f9c362da",
  },
});
