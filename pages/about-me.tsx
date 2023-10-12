import React from "react"
import Layout from "../components/Layout"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe: React.FC = () => {
    const handleClick = (url) => {
        window.open(url, '_blank');
    };

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
                        <button className="button" onClick={handleClick("https://github.com/justindhillon")}>1</button>
                        <button className="button" onClick={handleClick("https://twitter.com/justindhillon0")}>2</button>
                        <button className="button" onClick={handleClick("https://www.linkedin.com/in/justin-dhillon-5b0780295/")}>3</button>
                        <button className="button" onClick={handleClick("https://github.com/justindhillon/ubcevents")}>3</button>
                        <button className="button" onClick={handleClick("https://mail.google.com/mail/?view=cm&fs=1&to=justin.singh.dhillon@gmail.com")}>3</button>
                        <button className="button" onClick={handleClick("https://www.instagram.com/ubc_events/")}>3</button>
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

                .button {
                    background-color: rgba(51, 51, 51, 0.05);
                    border-radius: 8px;
                    border-width: 0;
                    color: #333333;
                    cursor: pointer;
                    display: inline-block;
                    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    list-style: none;
                    margin: 0;
                    padding: 10px 12px;
                    text-align: center;
                    transition: all 200ms;
                    vertical-align: baseline;
                    white-space: nowrap;
                    user-select: none;
                    -webkit-user-select: none;
                    touch-action: manipulation;
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
