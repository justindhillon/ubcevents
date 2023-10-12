import React from "react"
import type { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import Footer from "../components/Footer";
import Head from 'next/head';

const AboutMe: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <meta property="description" content="About Me Page" />
      </Head>
      <div className="page">
        <h1>Upcoming Events</h1>
        <main>
            <h2>About Me</h2>
            <p>About Me</p>
            <style jsx>{`
                main {
                    background: white;
                    padding: 2rem;
                    transition: box-shadow 0.1s ease-in;
                }
            `}</style>
        </main>
        <div style={{textAlign:"center"}}>
            <br /><br />
            <p>Back to <a href="/"><span style={{color:"#2596be"}}>FEED</span></a></p>
            <br /><br />
        </div>
    </div>
    <style jsx>{`
        main {
            background: white;
            padding: 2rem;
            transition: box-shadow 0.1s ease-in;
        }
    `}</style>
    </Layout>
  )
}

export default AboutMe;
