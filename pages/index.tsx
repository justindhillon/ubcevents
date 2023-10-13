import React from "react"
import type { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from "../lib/prisma";
import Footer from "../components/Footer";
import Head from 'next/head';
import { useState, useEffect } from "react";
import axios from "axios";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    take: 10,
    where: { published: true, moderated: true },
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

const UpcomingEvents: React.FC<Props> = (props) => {
  const [feed, setFeed] = useState([]);

  setFeed(props.feed);

  async function getMorePosts(index: number): Promise<void> {
    const res = await axios.get('/api/post/getmoreposts'); 
    setFeed(feed => [feed, res]);
    console.log(feed);
  }

  return (
    <Layout>
      <Head>
        <title>UBC Events</title>
        <meta property="description" content="Everything UBC" />
      </Head>
      <div className="page">
        <h1>Upcoming Events</h1>
        <main>
          {feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
        <button className=".post" onClick={() => getMorePosts(1)}>
          Load More
        </button>
        <Footer />
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default UpcomingEvents
