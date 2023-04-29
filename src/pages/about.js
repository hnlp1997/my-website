import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout.js";
import { capitalizeFirstLetter } from "../components/layout.js";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter()
  return (
    
    <Layout>
      <div className={utilStyles.container}>
        <Head>
        
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/240/apple/354/snowman_2603-fe0f.png"
        />
        <title> {capitalizeFirstLetter(router.pathname.replace("/", ""))}</title>
        <meta name="description" content="Welcome to Nam's Website!" />
      </Head>


        <main className={utilStyles.headingMd}>
          <h1 className="text-5xl flex flex-col w-full mb-12 text-left lg:text-center">
            About Me
          </h1>
          <div className='grid grid-cols-2 max-w-5xl items-center'>
            <div className="">
            <p>
              My Website is a team of passionate individuals who strive to
              create the best possible web experiences for our clients. With
              years of experience and a dedication to staying up-to-date with
              the latest technologies and design trends, we bring our clients'
              visions to life.
            </p>

            <h2 className='relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>Our Team</h2>
  
            <ul className={utilStyles.list}>
              <li>
                <h3>Your Name</h3>
                <p>Your Position</p>
              </li>
              <li>
                <h3>John Doe</h3>
                <p>Lead Developer</p>
              </li>
              <li>
                <h3>Jane Doe</h3>
                <p>Designer</p>
              </li>
              <li>
                <h3>Mark Smith</h3>
                <p>Project Manager</p>
              </li>
            </ul>
            </div>
            <img
              src="/heart.jpeg"
              alt="Hoang-Nam LuuPham"
              height="250"
              width="250"
              className="text-center mx-auto transform"
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
