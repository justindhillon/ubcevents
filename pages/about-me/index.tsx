import React from "react"
import Layout from "../../components/Layout";
import Head from 'next/head';
import Intro from "./Intro";
import Links from "./Links";

const AboutMe: React.FC = () => {
    return (
        <Layout>
            <Head>
                <title>UBC Events - About Me</title>
                <meta property="description" content="About Me Page" />
            </Head>
            <div className="page">
                <h1>About Me</h1>
                <Intro />
                <br /><br />
                <Links />
                <div style={{textAlign:"center"}}>
                    <br /><br />
                    <p>Back to <a href="/"><span style={{color:"#2596be"}}>Feed</span></a></p>
                    <br /><br />
                </div>
            </div>
        </Layout>
    )
}

export default AboutMe;
