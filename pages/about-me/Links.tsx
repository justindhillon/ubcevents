import React from "react"
import Image from 'next/image';

const Links: React.FC = () => {
    return (
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
            <style jsx>{`
                main {
                    background: white;
                    padding: 2rem;
                    padding-top: 4rem;
                    transition: box-shadow 0.1s ease-in;
                    display: -webkit-flex;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }

                .main:hover {
                    box-shadow: 1px 1px 3px #aaa;
                }

                .links {
                    width: 100%;
                    max-width: 32rem;
                    display: grid;
                    grid-template-rows: repeat(2, 1fr);
                    grid-template-columns: repeat(3, 1fr);
                    grid-row-gap: 2rem;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }

                .links a {
                    margin-left: auto;
                    margin-right: auto;
                }

                .links a:hover {
                    opacity: 0.7;
                }

                @media screen and (max-width: 512px) {
                    .links {
                        grid-template-rows: repeat(3, 1fr);
                        grid-template-columns: repeat(2, 1fr);
                        grid-row-gap: 1rem;
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
            `}</style>
        </main>
    )
}

export default Links;
