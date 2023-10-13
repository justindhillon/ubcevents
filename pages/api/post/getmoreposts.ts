import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/post/getmoreposts
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { index } = req.body;
  const start = index * 10;
  const end = start + 10;
  const feed = await prisma.post.findMany({
    skip: { start },
    take: { end },
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
  res.json( feed );
}
