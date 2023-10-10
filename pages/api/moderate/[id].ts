import prisma from "../../../lib/prisma";

// PUT /api/moderate/:id
export default async function handle(req, res) {
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: postId },
    data: { moderated: true },
  });
  res.json(post);
}