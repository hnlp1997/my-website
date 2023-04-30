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
          <div className="grid grid-cols-2 max-w-5xl items-center">
            <div className="">
              <p>
                My name is <div class="relative overflow-hidden group"><span class="invisible">Hoang-Nam LuuPham</span><span class="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">Hoang-Nam LuuPham</span><span class="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">Hoang-Nam LuuPham</span></div>. I'm 21 years old, and I recently graduated from Santa Clara University with a BS in Business Management.
                I will then be pursuing a Master's in Business Analytics full-time at SCU starting in Fall 2023. My goal post-graduation is to become a data analyst, as I enjoy the process of transforming messy, unformatted data
                into valuable insights for company stakeholders. 
              </p>

              <h2 className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                
              </h2>
             

             
            </div>
            <img
              src="/hi.jpeg"
              alt="Hoang-Nam LuuPham"
              height="350"
              width="350"
              className="text-center mx-auto transform rounded-lg"
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
