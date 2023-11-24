import React, { useState } from "react";
import type { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from "../lib/prisma";
import { useSession } from "next-auth/react";
import Head from 'next/head'
import Footer from "../components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    take: 10,
    where: { published: true, moderated: false },
    include: {
      author: {
        select: { name: true },
      },
    },
    orderBy: {
      eventDate: 'asc',
    },
  })
  return {
    props: { feed },
    revalidate: 10,
  }
}

type Props = {
  feed: PostProps[]
}

const Moderation: React.FC<Props> = (props) => {
  // Initialize state for the feed
  const [feed, setFeed] = useState(props.feed);
  const { data: session, status } = useSession();

  // Function to remove a post from the feed
  async function moderatePost(id: string): Promise<void> {
    // API call to moderate the post
    await fetch(`/api/moderate/${id}`, {
      method: "PUT",
    });

    // Update the state to remove the moderated post
    setFeed(currentFeed => currentFeed.filter(post => post.id !== id));
  }
  
  async function deletePost(id: string): Promise<void> {
    // API call to delete the post
    await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    // Update the state to remove the moderated post
    setFeed(currentFeed => currentFeed.filter(post => post.id !== id));
  }

  return (
    <Layout>
      <Head>
        <title>UBC Events - Moderation</title>
        <meta property="description" content="Moderation page" />
      </Head>
      <div className="page">
        <h1>Moderation</h1>
        <main>
          {feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
              { session?.user.moderator &&
                <div className="button-container">
                  <button onClick={() => moderatePost(post.id)}>
                    <a>✅</a>
                  </button>
                  <button onClick={() => deletePost(post.id)}>
                    <a>❌</a>
                  </button>
                </div>
              }
            </div>
          ))}
        </main>
        <Footer />
        <br /><br />
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
          word-wrap: break-word;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }

        .button-container {
          display: flex;
          justify-content: center;
          align-items: stretch;
          margin: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 2rem 4rem;
          flex-grow: 10;
          margin-bottom: 4rem;
        }

        button + button {
          margin-left: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Moderation
