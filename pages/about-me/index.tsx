import React, { useEffect } from "react";

const AboutMe: React.FC = () => {
    useEffect(() => {
        // Redirect to the desired URL
        window.location.href = "https://www.justin-dhillon.com/";
    }, []);

    // Render nothing since we're redirecting
    return null;
}

export default AboutMe;
