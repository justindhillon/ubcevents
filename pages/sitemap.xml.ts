import prisma from "../lib/prisma";

const EXTERNAL_DATA_URL = 'https://ubcevents.com/p';

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!--We manually set the two URLs we know already-->
        <url>
            <loc>https://ubcevents.com/</loc>
        </url>
        <url>
            <loc>https://ubcevents.com/api/auth/signin</loc>
        </url>
        ${posts.map(({ id }) => {
            return `
                <url>
                    <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
                </url>
            `;
        }).join('')}
    </urlset>
    `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    const feed = await prisma.post.findMany({
        where: { published: true, moderated: true },
        include: {
            author: {
            select: { name: true },
            },
        },
    })

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(feed);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    }
}

export default SiteMap;
