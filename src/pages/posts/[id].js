import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='w-full max-w-lg pb-64'>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={"flex justify-start items-center gap-x-2"}>
          <Image
            priority
            src="/images/haha.jpeg"
            className='rounded-full'
            height={40}
            width={40}
            alt={"Hoang-Nam"}
            href="/about"
          />
          <Link href="/about">Hoang-Nam LuuPham </Link>
          <Date
            className="text-black dark:text-white"
            dateString={postData.date}
          />
        </div>
        <hr className="py-2 opacity-0" />
        <div
          className={"prose w-full text-left dark:prose-invert"}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
