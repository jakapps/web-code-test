import { FC } from "react";
import { gql, useQuery } from "@apollo/client";

type Blog = {
  title: string,
  preface: string,
  body: string
};

const GET_BLOGS = gql`
  query GetBlogs($limit: Int) {
    blogPostCollection(limit: $limit) {
      items {
        title
        preface
        body
      }
    }
  }
`;

const Blogs: FC<{ limit?: number }> = ({ limit = 10 }) => {
  const { loading, error, data } = useQuery(
    GET_BLOGS,
    { variables: { limit } }
  );

  if(loading) {
    return "Loading...";
  }

  return data
    .blogPostCollection
    .items
    .map((blog: Blog, index: number) => {
      return <div key={index}>{blog.title}</div>
    });
};

export {
  GET_BLOGS,
  Blogs
};