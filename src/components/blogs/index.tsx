import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import Card from "../card";
import styled from "styled-components";

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

const BlogsLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Blogs: FC<{ limit?: number }> = ({ limit = 10 }) => {
  const { loading, error, data } = useQuery(
    GET_BLOGS,
    { variables: { limit } }
  );

  if(loading) {
    return <>Loading...</>;
  }

  if(error) {
    return <>Something went wrong</>;
  }

  return (
    <BlogsLayoutContainer>
      {data
        .blogPostCollection
        .items
        .map((blog: Blog, index: number) => {
          return <Card 
            key={index} 
            large={!(index % 5)}
            title={blog.title}
            body={blog.body} />
        })}
    </BlogsLayoutContainer>
  );
};

export {
  GET_BLOGS,
  Blogs
};