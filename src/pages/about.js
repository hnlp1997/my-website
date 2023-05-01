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
            <h1 className="text-4xl font-bold flex flex-col w-full mb-12 text-left lg:text-center pt-8">
              About Me
            </h1>
            <div className="grid grid-cols-2 max-w-5xl items-start">
              <div className="prose w-full text-left dark:prose-invert">
                <p className="">
                  My name is <span class="font-bold">Nam</span>, nice to meet
                  you! I’m 21 years old and am currently pursuing my Master's in
                  Business Analytics at Santa Clara University. This summer, I
                  will be interning at {" "}
                  <a href="https://www.gallo.com/" target="_blank">
                    {" "}
                    E. & J. Gallo Winery
                  </a>{" "}
                  as a Systems Analyst. I'm passionate about the world of
                  data analytics, as I enjoy transforming messy, unformatted
                  data into valuable insights! •‿•
                </p>
                <p className="flex underline">
                  Here are some fun facts about me:
                </p>
                <ul className="list-disc list-inside indent-4">
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
                    No matter what, I have to walk at least 10k+ steps daily
                  </li>
                  <li>
                    Favorite artists: G Jones, DECO*27, TWICE, Virtual Self
                  </li>
                  <li>Favorite anime: K-ON!, Eva, Ping Pong, Kaguya-sama</li>
                </ul>

                <h2 className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"></h2>
              </div>
              <img
                src="/hi.jpeg"
                alt="Hoang-Nam LuuPham"
                height="475"
                width="475"
                className="text-center mx-auto transform rounded-lg"
              />
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
