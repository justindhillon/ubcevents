import React from "react"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import Footer from "../components/Footer";
import Head from 'next/head';
import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'

const UpcomingEvents: React.FC = (props) => {
  const { ref, inView } = useInView()

  const { isLoading, isError, data, error, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      'posts',
      async ({ pageParam = '' }) => {
        await new Promise((res) => setTimeout(res, 1000))
        const res = await axios.get('/api/get?cursor=' + pageParam)
        return res.data
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextId ?? false,
      }
    )

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

  if (isLoading) return <div className="loading">Loading...</div>
  if (isError) return <div>Error! {JSON.stringify(error)}</div>

  return (
    <Layout>
      <Head>
        <title>UBC Events</title>
        <meta property="description" content="Everything UBC" />
      </Head>
      <div className="page">
        <h1>Upcoming Events</h1>
        <main>
          {data.posts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
        <Footer />
        {isFetchingNextPage ? <div className="loading">Loading...</div> : null}

        <span style={{ visibility: 'hidden' }} ref={ref}>
          intersection observer marker
        </span>
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
