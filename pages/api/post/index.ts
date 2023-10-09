import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content, dateString, date } = req.body;
  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      dateString: dateString,
      date: date,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}