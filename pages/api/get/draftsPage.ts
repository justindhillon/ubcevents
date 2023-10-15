import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

// POST /api/loadmore/draftsPage.ts
export default async function handle(req, res) {
	const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return [];
  }

	const post = req.body.body;

  const drafts = await prisma.post.findMany({
    take: 10,
		skip: post * 10,
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  res.json(drafts);
}
