import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout.js";
import { capitalizeFirstLetter } from "../components/layout.js";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <Layout>
      <div className={utilStyles.container}>
        <div className="overflow-y-clip">
          <Head>
            <link
              rel="icon"
              href="https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png"
            />
            <title>
              {" "}
              {capitalizeFirstLetter(router.pathname.replace("/", ""))}
            </title>
            <meta name="description" content="Welcome to Nam's Website!" />
          </Head>

          <main className={utilStyles.headingMd}>
            <h1 className="text-3xl font-bold flex flex-col w-full mb-10 text-left lg:text-center pt-8">
              About Me
            </h1>
            <div className="grid grid-cols-2 max-w-4xl items-start">
              <div className="prose prose-p:text-[16px] prose-ul:text-[15px] w-full text-left dark:prose-invert">
                <p className="">
                  My name is <span class="font-bold">Nam</span>, nice to meet
                  you! I’m 21 years old and was born and raised in San Jose, CA. I am currently pursuing a Master's in
                  Business Analytics at Santa Clara University. This summer, I
                  will be interning at {" "}
                  <a href="https://www.gallo.com/" target="_blank">
                    {" "}
                    E. & J. Gallo Winery
                  </a>{" "}
                  as an IT Systems Analyst. I'm passionate about the world of
                  data analytics, as I enjoy the art of transforming messy, unformatted
                  data into valuable insights! •‿•
                </p>
                <p className="flex underline">
                  Here are some fun facts about me:
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    I DJ every Tuesday from 10-11 AM PST on{" "}
                    <a href="https://kscu.org/" target="_blank">
                      {" "}
                      kscu.org
                    </a>{" "}
                  </li>
                  <li>My younger brother Ha also attends SCU (sophomore)</li>
                  <li>"LuuPham" is a combination of our parents' last names</li>
                  <li>
                    Favorite artists: G Jones, DECO*27, TWICE, Virtual Self
                  </li>
                  <li>Favorite anime: K-ON!, Eva, Ping Pong, Kaguya-sama</li>
                </ul>
              </div>
              <img
                src="/hi.jpeg"
                alt="Hoang-Nam LuuPham"
                height="400"
                width="400"
                className="text-center mx-auto transform rounded-lg"
              />
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
