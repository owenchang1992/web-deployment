import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import About from '../sections/about/About';
import Navbar from '../components/navbar/Navbar';
import Contact from '../sections/contact/Contact';
import Experience from '../sections/experience/Experience';
import Header from '../sections/header/Header';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Owen Chang Portfolio</title>
      <meta name="description" content="Owen Chang" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <Header />
    <Navbar />
    <About />
    <Experience />
    <Contact />
  </div>
);

export default Home;
