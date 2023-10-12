import React from "react"
import Layout from "../components/Layout"
import Head from 'next/head';
import Image from 'next/image';

const AboutMe: React.FC = () => {
    return (
        <Layout>
            <Head>
                <title>UBC Events - About Me</title>
                <meta property="description" content="About Me Page" />
            </Head>
            <div className="page">
                <h1>About Me</h1>
                <main>
                    <div className="column">
                        <Image
                            src="/images/profile.jpg"
                            width={1000}
                            height={1000}
                            alt="Picture of the author"
                            className={"circle"}
                        />
                    </div>
                    <div className="column">
                        <p className="text-block">
                            Welcome to my corner of the internet! 
                            I'm Justin Dhillon, and I'm delighted that you've dropped by. 
                            I’m a UBC computer science student with a deep love for solving problems. 
                            I never knew what events were going on at UBC, so I made this! 
                            ubcevents.com lets ubc students post all their events in one place! 
                            ubcevents.com is made to give you the best university experience! 
                            Keeping you in the loop, and on top of everything UBC! 
                            Events are updated in live time. So take a look!
                        </p>
                    </div>
                </main>
                <br />
                <br />
                <main>
                    <div className="links">
                        <a href="https://github.com/justindhillon" target="_blank">
                            <Image
                                src="/images/icons/github.jpg"
                                width={128}
                                height={128}
                                alt="Github"
                            />
                        </a>
                        <a href="https://twitter.com/justindhillon0" target="_blank">
                            <Image
                                src="/images/icons/instagram.jpg"
                                width={128}
                                height={128}
                                alt="Twitter"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/justin-dhillon-5b0780295/" target="_blank">
                            <Image
                                src="/images/icons/instagram.jpg"
                                width={128}
                                height={128}
                                alt="Linkedin"
                            />
                        </a>
                        <a href="https://github.com/justindhillon/ubcevents" target="_blank">
                            <Image
                                src="/images/icons/instagram.jpg"
                                width={128}
                                height={128}
                                alt="Source"
                            />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=justin.singh.dhillon@gmail.com" target="_blank">
                            <Image
                                src="/images/icons/instagram.jpg"
                                width={128}
                                height={128}
                                alt="Gmail"
                            />
                        </a>
                        <a href="https://www.instagram.com/ubc_events/" target="_blank">
                            <Image
                                src="/images/icons/instagram.jpg"
                                width={128}
                                height={128}
                                alt="Instagram"
                            />
                        </a>
                        <br />
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
                    padding-top: 4rem;
                    transition: box-shadow 0.1s ease-in;
                    display: -webkit-flex;
                    display: flex;
                }

                .column {
                    -webkit-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    padding: 2rem;
                    padding-top: 0rem;
                    text-align: center;
                    margin: auto;
                }

                .circle {
                    border-radius: 50%;
                }

                .text-block {
                    text-align: left;
                    font-size: 1.5rem;
                }

                .links {
                    width: 100%;
                    max-width: 64rem;
                    display: grid;
                    grid-template-rows: repeat(2, 1fr);
                    grid-template-columns: repeat(3, 1fr);
                    grid-row-gap: 1rem;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }

                .links a {
                    margin-left: auto;
                    margin-right: auto;
                }

                @media screen and (max-width: 512px) {
                    .links {
                        grid-template-rows: repeat(3, 1fr);
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media screen and (max-width: 768px) {
                    main {
                        -webkit-flex-direction: column;
                        flex-direction: column;
                        padding: 0.5rem;
                        padding-top: 2.5rem;
                    }
                }

                @media screen and (max-width: 1024px) {
                    .text-block {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </Layout>
    )
}

export default AboutMe;
