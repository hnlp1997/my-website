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
            <h1 className="text-3xl font-bold flex flex-col w-full lg:mb-8 mb-4 text-center lg:pt-12 pt-0">
              About Me
            </h1>
            <img
                src="/hi.jpeg"
                alt="Hoang-Nam LuuPham"
                height="275"
                width="275"
                className="text-center mx-auto transform rounded-lg lg:hidden mb-4 lg:mb-0"
              />
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-w-4xl items-start  max-w-xs pb-24">
              <div className="prose prose-p:text-[16px] prose-ul:text-[15px] w-full text-left dark:prose-invert">
                <p className="">
                  My name is <span class="font-bold">Nam</span>, nice to meet
                  you! I’m 22 years old and was born and raised in San Jose, CA. This summer, I
                  will be interning in Modesto at {" "}
                  <a href="https://www.gallo.com/" target="_blank">
                    {" "}
                    E. & J. Gallo Winery
                  </a>{" "}
                  as an IT Systems Analyst. I'm passionate about the world of
                  data analytics, as I enjoy the art of transforming messy, unformatted
                  data into valuable insights. I am proficient in tools such as Excel, SQL, Python, R, and Tableau! •‿•


                </p>
                <p className="flex underline">
                  Here are some fun facts about me:
                </p>
                <ul className="list-disc list-inside ">
                  <li className='-ml-2'>
                    I DJ live every Tuesday from 10-11 AM PST on{" "}
                    <a href="https://kscu.org/" target="_blank">
                      {" "}
                      kscu.org
                    </a>{" "}
                  </li>
                  <li className='-ml-2'>My younger brother Ha also attends SCU (sophomore)</li>
                  <li className='-ml-2'>"LuuPham" is a combination of our parents' last names</li>
                  <li className='-ml-2'>
                    Favorite artists: G Jones, DECO*27, TWICE, Virtual Self
                  </li>
                  <li className='-ml-2'> Favorite anime: K-ON!, Eva, Ping Pong, Kaguya-sama</li>
                </ul>
              </div>
              <img
                src="/hi.jpeg"
                alt="Hoang-Nam LuuPham"
                height="400"
                width="400"
                className="text-center mx-auto transform rounded-lg hidden lg:block"
              />
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
