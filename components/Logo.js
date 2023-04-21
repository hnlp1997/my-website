import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/outline";

const Logo = () => (
	<Link legacyBehavior href="/">
		<a className="flex items-center space-x-1 text-white pl-4 pt-3">
			<GlobeAltIcon className="w-10 h-10 flex-shrink-0" />
			<span className="font-bold text-lg tracking-tight whitespace-nowrap">

			</span>
		</a>
	</Link>
);

export default Logo;
