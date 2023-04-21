import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import useSWR from "swr";
<<<<<<< HEAD
import { useState } from 'react';

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Welcome to my website; please feel free to call me <strong>Nam</strong>! I’m pursuing an MS in Business Analytics at Santa
					Clara University. Contact me via{" "}
					<a href="mailto:hnluupham@gmail.com">email</a> or on
					<a href="https://www.linkedin.com/in/hnlp/" target="_blank">
						{" "}
						LinkedIn
					</a>{" "}
					if you have any questions!
				</p>
			</section>

		</Layout>
	);
=======

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, welcome to my website. You can call me <strong>Nam</strong> or <strong>HN</strong>. 
          I’m pursuing an MS in
          Business Analytics at Santa Clara University. Contact me via
          {' '}<a href="mailto:hnluupham@gmail.com">email</a> or on
          <a href="https://www.linkedin.com/in/hnlp/" target="_blank"> LinkedIn</a> if you have any questions!
        </p>
        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog:</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
>>>>>>> 60c00f94bf8997f82a92b1164964b9dcf1612a9b
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
