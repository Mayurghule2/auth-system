import axios from "axios";

export default axios.create({
  baseURL: "https://auth-system-4m1f.onrender.com",
  withCredentials: true
});
