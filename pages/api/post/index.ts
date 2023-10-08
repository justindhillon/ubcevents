import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  console.log(req.body);
  const { title, content, eventDate } = req.body;
  console.log(eventDate);

  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      eventDate: eventDate,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}