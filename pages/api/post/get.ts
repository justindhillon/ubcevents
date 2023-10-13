import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// GET /api/post/get
export default async function handle(req, res) {
  const { page } = req.body;
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
  res.json(feed);
}
