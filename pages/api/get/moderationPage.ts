import prisma from "../../../lib/prisma";

// POST /api/loadmore/moderationPage
export default async function handle(req, res) {
  const post = req.body.body;
  const moderated = await prisma.post.findMany({
		skip: post * 10,
		take: 10,
		where: { published: true, moderated: false },
		include: {
		  	author: {
				  select: { name: true },
		  	},
		},
		orderBy: {
		  	eventDate: 'asc',
		},
	})
  res.json(moderated);
}
