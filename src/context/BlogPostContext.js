import createDataContext from "./createDataContext";
import dataBaseServer from "../api/dataBaseServer";

const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "get_post":
      return action.payload;
    case "add_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_post":
      return state.filter((blogPost) => blogPost.id !== action.payload); //{ is not equal to the id that was passed in as the payload !== }
    case "edit_post":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await dataBaseServer.post("/blog-posts", { title, content });
    //   dispatch({ type: "add_post", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await dataBaseServer.delete(`/blog-posts/${id}`);
    dispatch({ type: "delete_post", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await dataBaseServer.put(`/blog-posts/${id}`, { title, content });
    dispatch({
      type: "edit_post",
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await dataBaseServer.get("/blog-posts");
    dispatch({ type: "get_post", payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  blogPostReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
