import React from "react";

const BlogPostContext = React.createContext();

export const BlogPostProvider = ({ children }) => {
  const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];

  return (
    <BlogPostContext.Provider value={blogPosts}>
      {children}
    </BlogPostContext.Provider>
  );
};

export default BlogPostContext;
