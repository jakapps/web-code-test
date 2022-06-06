import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import Card from "../card";

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

  if(error) {
    return "Something went wrong";
  }

  return data
    .blogPostCollection
    .items
    .map((blog: Blog, index: number) => {
      return <Card 
        key={index} 
        title={blog.title}
        body={blog.body} />
    });
};

export {
  GET_BLOGS,
  Blogs
};