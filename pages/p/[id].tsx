import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import { useSession } from "next-auth/react";
import prisma from "../../lib/prisma";
import Head from 'next/head'
import { Markup } from "react-render-markup";

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/publish");
}

async function deletePost(id: string): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  Router.push("/");
}

const Post: React.FC<PostProps> = (props) => {
  const {data: session, status} = useSession();
  if (status === "loading") {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email || session?.user.moderator;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  const dateObj = new Date(props?.eventDate);
  const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: "UTC" });

  let time = "";

  if (props?.startTime) {
    const startTime = convertTime(props?.startTime);
    time += startTime;
  }
  
  if (props?.endTime) {
    const endTime = convertTime(props?.endTime);
    time += " - " + endTime
  }

  // Replace URLs with links
  const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
  const contentWithLinks = props.content.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="description" content={props.content} />
      </Head>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <Markup markup={contentWithLinks} />
        <p>📅 {formattedDate}</p>
        {time && <p>⏰ {time}</p>}
        {props?.location && <p>📍 {props?.location}</p>}
        {!props.published && userHasValidSession && postBelongsToUser && (
          <button onClick={() => publishPost(props.id)}>Publish</button>
        )}
        {userHasValidSession && postBelongsToUser && (
          <button onClick={() => deletePost(props.id)}>Delete</button>
        )}
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
          word-wrap: break-word;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Post;
