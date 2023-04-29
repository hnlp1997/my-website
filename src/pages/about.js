import Head from 'next/head';
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>About Me</title>
        <meta name="about" content="About Me" />
        <link rel="icon" href="/speech.ico" />
      </Head>

      <main className={utilStyles.headingMd}>
        <h1 className="text-5xlflex flex-col w-full mb-12 text-left lg:text-center">
          About Me
        </h1>

        <img src="/heart.jpeg" alt="Hoang-Nam LuuPham" height="250" width="250" className="text-center mx-auto transform round-image"/>
      <div className='max-w-lg'>
        <p>
          My Website is a team of passionate individuals who strive to create the best possible web experiences for our clients. With years of experience and a dedication to staying up-to-date with the latest technologies and design trends, we bring our clients' visions to life.
        </p>

        <h2 className={utilStyles.subtitle}>
          Our Team
        </h2>

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
      </main>
    </div>
  );
}