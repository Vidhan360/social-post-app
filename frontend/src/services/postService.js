import API from "./api";

export const getPosts = () => {
  return API.get("/posts");
};

export const createPost = (
  formData
) => {
  return API.post(
    "/posts",
    formData
  );
};