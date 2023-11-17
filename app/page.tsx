/*
	REMINDERS

	I copied the json data in the website https://nextjs-orpin-omega-98.vercel.app/api/restaurants
	since the website is blocking me for accessing the data. The problem is the CORS.
	I think while developing the website, they forgot to change the CORS.
	So I copied the json data into the /constants/index.ts
	The output will be the same even if I can access the website.
	There is a commented code on the Homepage.tsx
	Uncomment that if you can access the https://nextjs-orpin-omega-98.vercel.app/api/restaurants
*/

import Homepage from "@/components/Homepage"

export default function Home() {
	return(
		<Homepage />
	)
}
