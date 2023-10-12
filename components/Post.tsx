import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  eventDate: Date;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <ReactMarkdown children={post.content} />
      <p>📅 {post.eventDate}</p>
      <p>⏰ {post.eventDate}</p>
      {post.location && <p>📍 {post.location}</p>}
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
