'use client'

import { useInfiniteQuery } from "react-query";
import prisma from "../lib/prisma";

const posts = [
	{ id: 1, title: "post 1" },
	{ id: 2, title: "post 2" },
	{ id: 3, title: "post 3" },
	{ id: 4, title: "post 4" },
	{ id: 5, title: "post 5" },
	{ id: 6, title: "post 6" },
]

const fetchPost = async (page: number) => {
	const feed = await prisma.post.findMany({
		skip: (page - 1) * 2,
		take: page * 2,
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
		feed
	}
	
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return posts.slice((page - 1) * 2, page * 2);
}

const Page = () => {
	const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
		['query'],
		async ({ pageParam = 1 }) => {
			const response = await fetchPost(pageParam);
			return response;
		},
		{
			getNextPageParam: (_, pages) => {
				return pages.length + 1
			},
			initialData: {
				pages: [posts.slice(0, 2)],
				pageParams: [1],
			}
		}
	)

	return (
		<div>
			Posts:
			{data?.pages.map((page, i) => (
				<div key={i}>
					{page.map((post) => (
						<div key={post.id}>{post.title}</div>
					))}
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
