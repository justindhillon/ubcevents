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
  const dateObj = new Date(post.eventDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <ReactMarkdown children={post.content} />
      <p>📅 {formattedDate}</p>
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
