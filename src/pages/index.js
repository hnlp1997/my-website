import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import useSWR from "swr";
import { useState } from "react";

export default function Home({ allPostsData }) {
  return (
    <>
    <Head>
      <title>HN</title>
        </Head>
      <Layout home>
        <section className=" text-[0.95rem] lg:text-[1.05rem] leading-6 mx-auto  px-7  mb-32">
          <p className=" max-w-lg text-center justify-center pt-0 mb-24">
            Welcome to my website; please feel free to call me{" "}
            <strong>Nam</strong>. I am pursuing an MS in Business Analytics at
            Santa Clara University. Contact me via{" "}
            <a href="mailto:hnluupham@gmail.com">email</a> or on
            <a href="https://www.linkedin.com/in/hnlp/" target="_blank">
              {" "}
              LinkedIn
            </a>{" "}
            if you have any questions!
          </p>
        </section>
      </Layout>
      </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
