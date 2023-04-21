import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";
import useSWR from "swr";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

const Header = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const fetcher = (url) =>
		fetch(url).then((r) => {
			return r.json();
		});
	const { data, isLoading } = useSWR("/api/spotify", fetcher, {
		refreshInterval: 1000,
	});

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const currentTheme = theme == "system" ? systemTheme : theme;

	if (isLoading) return null;
	return (
		<>
			<header className="flex w-full items-center justify-between flex">
				<div className="flex pl-3 mt-3">
					{data?.isPlaying ? (
						<span className="transition-colors duration-150 rounded-md w-auto pr-24 pl-2 py-2 pb-2 pt-1 bg-transparent flex gap-3 items-center">
							<img
								className="h-12 w-12"
								src={data.album.image.href}
								alt="Album Art"
							/>
							<div className="flex flex-col text-left">
								<span className="text-xs text-gray-400">I'm Listening To:</span>
								<a
									href={data.href}
									className="text-sm !text-inherit"
									target="_blank"
								>
									{data.title}
								</a>
								<a
									href={data.artists[0].href}
									className="text-xs !text-gray-400"
									target="_blank"
								>
									{data.artists[0].name}
								</a>
							</div>
						</span>
					) : (
						<Link
							href="https://open.spotify.com/user/haloblade24"
							className="flex items-center gap-2 !text-black group dark:!text-white"
							target="_blank"
						>
							{" "}
							<FaSpotify className="w-10 h-10 text-inherit group-hover:text-green-500 duration-150" />{" "}
							Not Listening
						</Link>
					)}
				</div>
				<button
					onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
					className="p-3 border flex items-center justify-center rounded-md mt-3 mr-3 hover:text-blue-300 hover:border-blue-300"
				>
					{theme == "dark" ? (
						<BsSun className="w-5 h-5 shrink-0" />
					) : (
						<BsMoon className="w-5 h-5 shrink-0" />
					)}
				</button>
			</header>
		</>
	);
};

export default Header;
