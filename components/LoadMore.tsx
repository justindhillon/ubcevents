'use client'

import { useInfiniteQuery } from "react-query";
import axios from "axios";
import React from "react"
import Post from "../components/Post"
import { useState } from "react";

const fetchPost = async (post: number, loadmore ) => {
	const feed = await axios.post('/api/get', {
    post: post,
    loadmore: loadmore,
  }); 
	return feed;
}

const LoadMore = ({ loadmore }) => {
  const [showButton, setShowButton] = useState(true);

	const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
		['query'],
		async ({ pageParam = 1 }) => {
			const response = await fetchPost(pageParam, loadmore);
      if (response.data.length < 10) {
        setShowButton(false);
      }
			return response.data;
		},
		{
			getNextPageParam: (_, pages) => {
				return pages.length + 1
			},
      enabled: false
		},
	)

  return (
    <div>
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
      <div style={{textAlign:"center"}}>
        {showButton && (
          <button className="button" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage
              ? "Loading more..."
              : "Load More"
            }
          </button>
        )}
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
          margin-bottom: 2rem;
        }

        .button {
          text-align: center;
          background: white;
          border-width: 0;
          padding: 1rem 5rem;
          transition: box-shadow 0.1s ease-in;
          font-size: 1.5rem;
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
      `}</style>
    </div>	
  )
}

export default LoadMore;
