'use client'

import Link from "next/link"
import { useParams } from "next/navigation"

const RestaurantPage = () => {
	const { restaurant } = useParams()

	return (
		<div className="ml-2 flex items-center justify-center flex-col h-screen">
			<Link href="/">
				<p className="py-1 px-4 hover:bg-black cursor-pointer transition-all bg-gray-500 rounded w-max text-[11px] text-white">Back</p>
			</Link>
			<div className="my-2">{restaurant.toString().replaceAll("-", " ")}</div>
			<p className="text-center text-[10px] text-black/60 w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a ex mollitia iste, deleniti perspiciatis et molestias illo quae atque dolorum esse saepe inventore eos. Ex voluptatum quod fuga enim!</p>
		</div>
	)
}

export default RestaurantPage
