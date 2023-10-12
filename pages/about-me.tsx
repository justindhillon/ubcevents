import React from "react"
import Layout from "../components/Layout"
import Head from 'next/head';
import Image from 'next/image';

const AboutMe: React.FC = () => {
  return (
    <Layout>
        <Head>
            <title>About Me</title>
            <meta property="description" content="About Me Page" />
        </Head>
        <div className="page">
            <h1>About Me</h1>
            <main>
                <div className="column" style={{ borderRadius:"50%" }}>
                <Image
                    src="/images/profile.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                </div>
                <div className="column" style={{ textAlign:"left" }}>
                    <p>Welcome to my corner of the internet! 
                        I'm Justin Dhillon, and I'm delighted that you've dropped by. 
                        I’m a UBC computer science student with a deep love for solving problems. 
                        I never knew what events were going on at UBC, so I made this! 
                        ubcevents.com lets ubc students post all their events in one place! 
                        ubcevents.com is made to give you the best university experience! 
                        Keeping you in the loop, and on top of everything UBC!</p>
                </div>
            </main>
            <div style={{textAlign:"center"}}>
                <br /><br />
                <p>Back to <a href="/"><span style={{color:"#2596be"}}>Feed</span></a></p>
                <br /><br />
            </div>
        </div>
        <style jsx>{`
            main {
                background: white;
                padding: 2rem;
                transition: box-shadow 0.1s ease-in;
                display: -webkit-flex;
                display: flex;
            }

            .column {
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                padding: 10px;
                text-align: center;
            }

            img {
                border-radius: 50%;
            }

            @media (max-width: 600px) {
                .row {
                  -webkit-flex-direction: column;
                  flex-direction: column;
                }
            }
        `}</style>
    </Layout>
  )
}

export default AboutMe;
