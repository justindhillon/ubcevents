import React from "react"
import Image from 'next/image';

const Intro: React.FC = () => {
    return (
        <main>
            <div className="column">
                <Image
                    src="/images/profile.jpg"
                    width={500}
                    height={500}
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
            <style jsx>{`
                main {
                    background: white;
                    padding: 2rem;
                    padding-top: 4rem;
                    transition: box-shadow 0.1s ease-in;
                    display: -webkit-flex;
                    display: flex;
                }
          
                main:hover {
                    box-shadow: 1px 1px 3px #aaa;
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
        </main>
    )
}

export default Intro;
