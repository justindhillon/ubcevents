import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/post/get
export default async function handle(req, res) {
  const page = req.body;
  const feed = await prisma.post.findMany({
		skip: (page.body - 1) * 5 + 1,
		take: page.body * 5,
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
