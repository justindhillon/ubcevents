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
                    <div className="column">
                        <Image
                            src="/images/profile.jpg"
                            width={1000}
                            height={1000}
                            alt="Picture of the author"
                            className="profile"
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
                    <div className="center">
                        <a href="https://github.com/justindhillon" target="_blank" className="icon">
                            <Image
                                src="/images/icons/instagram.jpg"
                                width={128}
                                height={128}
                                alt="Instagram"
                            />
                        </a>
                        <a href="https://twitter.com/justindhillon0" target="_blank"><button className="button">2</button></a>
                        <a href="https://www.linkedin.com/in/justin-dhillon-5b0780295/" target="_blank"><button className="button">3</button></a>
                        <a href="https://github.com/justindhillon/ubcevents" target="_blank"><button className="button">4</button></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=justin.singh.dhillon@gmail.com" target="_blank"><button className="button">5</button></a>
                        <a href="https://www.instagram.com/ubc_events/" target="_blank"><button className="button">6</button></a>
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

                .profile {
                    border-radius: 50%;
                }

                .text-block {
                    text-align: left;
                    font-size: 1.5rem;
                }

                .center {
                    margin: auto;
                }

                .icon {
                    border-radius: 8px;
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
