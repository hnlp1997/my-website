import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
	console.log(dateString)
	const date = dateString;
	return <time dateTime={dateString}>{format(new Date(date), "LLLL d, yyyy")}</time>;
}
