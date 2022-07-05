import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Owen Chang Portfolio</title>
      <meta name="description" content="Owen Chang" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <About />
    <Experience />
    <Contact />
  </div>
);

export default Home;
