import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// GET /api/post/get
export default async function handle(req, res) {
  const { page } = req.body;
  const feed = await prisma.post.findMany({
		skip: 5,
		take: 5,
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
