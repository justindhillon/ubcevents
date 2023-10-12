import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import Head from 'next/head'

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [eventDate, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      // Need to turn date string into DateTime object
      const body = { title, content, eventDate, startTime, endTime, location };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>UBC Events - New Post</title>
        <meta property="description" content="Create a new post" />
      </Head>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            maxlength="150"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title *"
            type="text"
            value={title}
          />
          <textarea
            maxlength="10000"
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content *"
            rows={8}
            value={content}
          />
          <input
            maxlength="100"
            autoFocus
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            type="text"
            value={location}
          />
          <br />
          <label>Date Of Event: </label>
          <input 
            onChange={(e) => setDate(e.target.value)}
            type="date" 
            value={eventDate}
          /> *
          <br /><br />
          <label>Select a time:  </label>
          <input 
            type="time" 
            onChange={(e) => setStartTime(e.target.value)}
            value={startTime}
          /> 
          <label>  -  </label>
          <input 
            type="time" 
            onChange={(e) => setEndTime(e.target.value)}
            value={endTime}
          />
          <br /><br />
          <small>Note: If you enter an event day that has already passed, it will be automatically deleted</small>
          <br /><br />
          <input disabled={!content || !title || !eventDate} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;