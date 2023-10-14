import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/post/get
export default async function handle(req, res) {
  const post = req.body.body;
  const feed = await prisma.post.findMany({
		skip: (post - 1) * 2,
		take: post * 2,
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
  res.json(feed);
}
