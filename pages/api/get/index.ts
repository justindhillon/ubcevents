import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from 'next'

type Post = {
  id: number
  title: string
  createdAt: Date
}

interface Data {
  posts: Post[]
  nextId: number | undefined
}

// GET /api/get
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'GET') {
    const limit = 5
    const cursor = req.query.cursor ?? ''
    const cursorObj = cursor === '' ? undefined : { id: parseInt(cursor as string, 10) }

    const posts = await prisma.post.findMany({
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
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

    return res.json({ posts, nextId: posts.length === limit ? posts[limit - 1].id : undefined })
  }
}
