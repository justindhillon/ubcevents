'use client'

import { useInfiniteQuery } from "react-query";
import axios from "axios";

const posts = [
    {
        "id": "clnntv4pk0006m6jz8kobzmmz",
        "title": "tomarrow",
        "content": "twer",
        "eventDate": "2023-10-21",
        "startTime": "",
        "endTime": "",
        "location": "",
        "published": true,
        "moderated": true,
        "authorId": "clnmgo1it000im6izo31bdchf",
        "author": {
            "name": "Justin Dhillon"
        }
    },
    {
        "id": "clnnu1um5000fm6jzc9el9l8w",
        "title": "s",
        "content": "asdtaadf",
        "eventDate": "2023-10-25",
        "startTime": "",
        "endTime": "",
        "location": "",
        "published": true,
        "moderated": true,
        "authorId": "clnmgo1it000im6izo31bdchf",
        "author": {
            "name": "Justin Dhillon"
        }
    },
    {
        "id": "clnnu0po3000bm6jz08umew33",
        "title": "test",
        "content": "test",
        "eventDate": "2023-11-08",
        "startTime": "",
        "endTime": "",
        "location": "",
        "published": true,
        "moderated": true,
        "authorId": "clnmgo1it000im6izo31bdchf",
        "author": {
            "name": "Justin Dhillon"
        }
    },
    {
        "id": "clnnu0k5m000am6jzskqsn1cw",
        "title": "test",
        "content": "test",
        "eventDate": "2023-11-10",
        "startTime": "",
        "endTime": "",
        "location": "",
        "published": true,
        "moderated": true,
        "authorId": "clnmgo1it000im6izo31bdchf",
        "author": {
            "name": "Justin Dhillon"
        }
    },
    {
        "id": "clnnu0w8t000cm6jzaaua2do3",
        "title": "test",
        "content": "test",
        "eventDate": "2023-12-12",
        "startTime": "",
        "endTime": "",
        "location": "",
        "published": true,
        "moderated": true,
        "authorId": "clnmgo1it000im6izo31bdchf",
        "author": {
            "name": "Justin Dhillon"
        }
    }
]

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

	//console.log(data.pages);

	return (
		<div>
			Posts:
			{data?.pages.map((page, i) => (
				<div key={i}>
					{Array.isArray(page)
        				? page.map((post) => {
							console.log(post)
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
