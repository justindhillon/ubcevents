import React from "react"
import type { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from "../lib/prisma";
import Footer from "../components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true, moderated: true },
    include: {
      author: {
        select: { name: true },
      },
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
  // Sort feed by which ones are comming up soonest
  props.feed.sort((a, b) => {
    let dateA = new Date(a.eventDate);
    let dateB = new Date(b.eventDate);
    if (dateA < dateB) {
      return -1;
    }
  });

  return (
    <Layout>
      <div className="page">
        <h1>Upcoming Events</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
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
