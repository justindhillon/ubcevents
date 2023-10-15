import prisma from "../../../lib/prisma";

// POST /api/get
export default async function handle(req, res) {
  const { post, loadmore } = req.body;
  const feed = await prisma.post.findMany({
		skip: post * 10,
		take: 10,
		where: loadmore,
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
