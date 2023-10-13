'use client'

import { useInfiniteQuery } from "react-query";
import axios from "axios";
import React from "react"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import Footer from "../components/Footer";
import Head from 'next/head';


const fetchPost = async (page: number) => {
	const feed = await axios.post('/api/post/get', {
    	body: page,
    }); 
	return feed;
}

const Page = () => {
	const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
		['query'],
		async ({ pageParam = 1 }) => {
			const response = await fetchPost(pageParam);
			return response.data;
		},
		{
			getNextPageParam: (_, pages) => {
				return pages.length + 1
			}
		}
	)

  return (
	<Layout>
	<Head>
	  <title>UBC Events</title>
	  <meta property="description" content="Everything UBC" />
	</Head>
	<div className="page">
	  <h1>Upcoming Events</h1>
	  <main>
		{data?.pages.map((page, i) => (
			<div key={i}>
			{Array.isArray(page)
				? page.map((post) => {
			    return (
				  <div key={post.id} className="post">
					<Post post={post} />
				  </div>
				)
			  })
			  : null
			}
		  </div>
		))}
	  </main>
	  <button className="button" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
	    {isFetchingNextPage
		  ? "Loading more..."
		  : "Load More"
		}
	  </button>
	  <Footer />
	</div>
	<style jsx>{`
	  .post {
			background: white;
			transition: box-shadow 0.1s ease-in;
	  }

		.button {
			margin-top: 2rem;
			align-items: center;
			display: inline-flex;
			justify-content: center;
			appearance: none;
			background: white;
			border-width: 0;
			box-sizing: border-box;
			color: #36395A;
			cursor: pointer;
			height: 48px;
			line-height: 1;
			list-style: none;
			padding-left: 16px;
			padding-right: 16px;
			position: relative;
			text-align: left;
			text-decoration: none;
			transition: box-shadow 0.1s ease-in;
			user-select: none;
			-webkit-user-select: none;
			touch-action: manipulation;
			white-space: nowrap;
			will-change: box-shadow,transform;
			font-size: 18px;
		}

		.button:hover {
			box-shadow: 1px 1px 3px #aaa;
		}

		.button:active {
			box-shadow: #D6D6E7 0 3px 7px inset;
			transform: translateY(2px);
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

export default Page;
