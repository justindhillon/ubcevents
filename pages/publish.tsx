import React from "react"
import Layout from "../components/Layout"

const Publish: React.FC<Props> = (props) => {
  // Sort feed by which ones are comming up soonest
  props.feed.sort((a, b) => {
    let dateA = new Date(a.eventDate);
    let dateB = new Date(b.eventDate);
    if (dateA < dateB) {
      return -1;
    }
  });

  return (
    <Layout>
      <div className="page">
        <h1>Thank You For Posting!</h1>
        <main>
            <small>The post is under moderation. After somone has verified the post, it will come up on the feed. This may take 1-2 days.</small>
            <br /><br />
            <p>Back to <a href="https://github.com/justindhillon/ubcevents"><span style={{color:"#2596be"}}>Feed</span></a></p>
        </main>
      </div>
    </Layout>
  )
}

export default Publish
