import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";
import useSWR from "swr";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";

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

  return (
    <>
      <header className="flex w-full items-center justify-between fixed">
        <div className="flex pl-3 mt-1">
          <div className=''>
          {!isLoading && data?.isPlaying ? (
            <div className="transition-colors duration-150 min-h-[72px] rounded-md w-auto pr-24 pl-1 py-2 pb-2 pt-1 bg-transparent flex gap-2 items-center">
              <img
                className="h-11 w-11 shrink-0 rounded-sm"
                src={data.album.image.href}
                alt="Album Art"
              />
              <div className="flex flex-col text-left">
                <span className="text-[12px] text-gray-400">I'm Listening To:</span>
                <a
                  href={data.href}
                  className="text-xs !text-inherit truncate max-w-[110px]"
                  target="_blank"
                >
                  {data.title}
                </a>
                <a
                  href={data.artists[0].href}
                  className="text-[12px] !text-gray-400 truncate max-w-[110px]"
                  target="_blank"
                >
                  {data.artists[0].name}
                </a>
              </div>
            </div>
          ) : (
            <Link
              href="https://open.spotify.com/user/haloblade24"
              className="min-h-[72px] flex items-center gap-2 !text-black group dark:!text-white"
              target="_blank"
            >
              {" "}
              <SiSpotify className="w-9 h-9 text-gray-400 group-hover:text-green-500 duration-150" />{" "}
              <span className="text-gray-400"></span>
            </Link>
          )}
        </div>
        </div>
        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          className="p-3 border flex items-center justify-center rounded-md mt-1 mr-4 hover:text-blue-400 hover:border-blue-400"
        >
          {theme == "dark" ? (
            <BsSun className="w-3 h-3 shrink-0" />
          ) : (
            <BsMoon className="w-3 h-3 shrink-0" />
          )}
        </button>
      </header>
    </>
  );
};

export default Header;
