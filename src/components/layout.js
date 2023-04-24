import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

const name = "Hoang-Nam LuuPham";
export const siteTitle = 'Nam';

export default function Layout({ children, home }) {
	return (
		<>
			<Head>
				<link rel="icon" href="https://em-content.zobj.net/thumbs/240/apple/354/snowman_2603-fe0f.png" />
				<title>Hoang-Nam LuuPham</title>
				<meta name="description" content="Welcome to Nam's Website!" />
			</Head>
			<Header />
			<div className={styles.container}>
				<header className={styles.header}>
					{home ? (
						<>
							<Image
								priority
								src="/images/haha.jpeg"
								className={utilStyles.borderCircle}
								height={175}
								width={175}
								alt={name}
							/>
							<h1 className={utilStyles.headingXl}>{name}</h1>
						</>
					) : (
						<></>
					)}
				</header>
				{children}
				{!home && (
					<div className={styles.backToHome}>
				
					</div>
				)}
				<div className="flex fixed bottom-8">
					<Footer />
				</div>
			</div>
		</>
	);
}
