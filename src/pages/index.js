import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import useSWR from "swr";
import { useState } from 'react';

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p className=' max-w-xl text-center justify-center pt-0'>
					Welcome to my website; please feel free to call me <strong>Nam</strong>. I am pursuing an MS in Business Analytics at Santa
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
	);}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
