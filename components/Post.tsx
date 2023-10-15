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
  startTime: string;
  endTime: string;
  location: string;
};

function convertTime(time) {
  const timeParts = time.split(':');
  let hours = parseInt(timeParts[0], 10);
  const minutes = timeParts[1];

  const period = hours >= 12 ? 'PM' : 'AM';
  if (hours > 12) {
    hours -= 12;
  }

  const formattedTime = hours + ':' + minutes + ' ' + period;
  return formattedTime;
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const dateObj = new Date(post.eventDate);
  const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: "UTC" });

  let time = "";

  if (post.startTime) {
    const startTime = convertTime(post.startTime);
    time += startTime;
  }
  
  if (post.endTime) {
    const endTime = convertTime(post.endTime);
    time += " - " + endTime
  }

  let content = "";

  if (post.content.length > 500) {
    content = post.content.slice(0, 500) + "...";
  } else {
    content = post.content;
  }

  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <ReactMarkdown children={content} />
      <p>📅 {formattedDate}</p>
      {time && <p>⏰ {time}</p>}
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
