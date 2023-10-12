import React from "react"
import Layout from "../components/Layout"
import Head from 'next/head'

const Publish: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Head>
        <title></title>
        <meta property="description" content="My page title" />
      </Head>
      <div className="page">
        <h1>Thank You For Posting!</h1>
        <main>
            <small>The post is under moderation. After somone has verified the post, it will come up on the feed. This may take 1-2 days.</small>
            <br /><br />
            <p>Back to <a href="https://ubcevents.com/"><span style={{color:"#2596be"}}>Feed</span></a></p>
        </main>
      </div>
    </Layout>
  )
}

export default Publish
