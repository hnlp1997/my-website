import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { useRouter } from "next/router";

const name = "Hoang-Nam LuuPham";
export const siteTitle = "HN";

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Layout({ children, home }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png"
        />
        <title> {capitalizeFirstLetter(router.pathname.replace("/", ""))}</title>
        <meta name="description" content="Welcome to Nam's Website!" />
      </Head>
      <Header />
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <div className='  pt-24 flex flex-col items-center justify-center'>
              <Image
                priority
                src="/images/pop.jpeg"
                className='rounded-full'
                height={155}
                width={155}
                alt={name}
              />
              <h1 className={utilStyles.headingXl}>{name}</h1>
            </div>
          ) : (
            <></>
          )}
        </header>
		<div className='container mx-auto flex items-center justify-center max-w-[1960px] w-full'>
        {children}
		</div>
        {!home && <div className={styles.backToHome}></div>}
        <div className="flex fixed bottom-8">
          <Footer />
        </div>
      </div>
    </>
  );
}
