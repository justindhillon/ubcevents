import React from "react"
import type { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from "../lib/prisma";
import Footer from "../components/Footer";
import LoadMore from "../components/LoadMore";
import Head from 'next/head';

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
  const loadmore = { 
    published: true, 
    moderated: true 
  }

  const showButton = true;

  if (props.feed.length < 10) {
    const showButton = false;
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
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
				{ showButton && <LoadMore loadmore={loadmore} /> }
        <Footer />
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
					margin-bottom: 2rem;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }
      `}</style>
    </Layout>
  )
}

export default UpcomingEvents;
