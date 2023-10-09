import React from "react"
import type { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
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

const Blog: React.FC<Props> = (props) => {
  /*
  // Sort by date string in ascending order
  props.feed.sort(function(a, b) {
    // Convert the date strings to Date objects
    let dateA = new Date(a);
    let dateB = new Date(b);

    // Subtract the dates to get a value that is either negative, positive, or zero
    return dateA - dateB;
  });
  */

  let feed = Object.values(props.feed).forEach(array => array.sort((a,b) => a.eventDate-b.eventData));

  console.log(feed);

  console.log(props.feed);

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

export default Blog
