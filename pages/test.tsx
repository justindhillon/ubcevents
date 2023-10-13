'use client'

import { useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchPost = async (page: number) => {
	const feed = await axios.get('/api/post/get', {
        method: "GET",
        body: JSON.stringify(page),
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
		<div>
			Posts:
			{data?.pages.map((page, i) => (
				<div key={i}>
					{Array.isArray(page)
        				? page.map((post) => {
							return <div key={post.id}>{post.title}</div>
						})
						: null
					}
				</div>
			))}
			<button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
				{isFetchingNextPage
					? "Loading more..."
					: (data?.pages.length ?? 0) < 3
					? "Load More"
					: "nothing more to load"
				}
			</button>
		</div>
	)
}

export default Page;
