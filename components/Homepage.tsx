'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

import { restaurantsAndStates } from '@/constants/'

const Homepage = () => {
	// Make a variable that will hold the respective states
	const [states, setStates] = useState<string[]>([])

	// Make a variable that will hold all the restaurants
	const [restaurants, setRestaurants] = useState<string[][]>()

	// Make a states reference to hold a temporary array of string
	// This will be used to compare the existing states
	const statesRef = useRef<string[]>([])

	// Make a restaurants reference to hold a temporary 2d array of strings
	const restaurantsRef = useRef<string[][]>([[]])

	useEffect(() => {
		// set all the default value to an empty array since all of them are arrays
		statesRef.current = []
		restaurantsRef.current = []
		setStates([])
		setRestaurants([])

		/*
			NOTES:
			const response = await fetch('https://nextjs-orpin-omega-98.vercel.app/api/restaurants')
			const restaurantsAndStates = await response.json()
		
			if you have access to the https://nextjs-orpin-omega-98.vercel.app/api/restaurants website
			just comment line number 6, and it will work just fine
		*/
		// map the json data
		restaurantsAndStates.map(restaurantAndState => {
			// check if the state is existing to prevent duplicates
			const isStateExisting = statesRef.current.includes(restaurantAndState.state)

			if(isStateExisting) {
				// put the restaurant into its respective state
				restaurantsRef.current[statesRef.current.indexOf(restaurantAndState.state)].push(restaurantAndState.restaurant_name)

				return
			}

			// if the state is not existing
			// push the state in the temporary state holder
			// and also, push the restaurant in the temporary restaurant holder
			statesRef.current.push(restaurantAndState.state)
			restaurantsRef.current.push([restaurantAndState.restaurant_name])
		})

		// get the temporary state and restaurant holder and assign it to the setStates and setRestaurants state
		// so that it will changed and can be used later
		setStates(statesRef.current)
		setRestaurants(restaurantsRef.current)
	}, [])

	return (
		<>
			<a className="inline-block text-black/70 mt-2 ml-[70px] underline text-sm max-[815px]:ml-0 max-[815px]:w-full max-[815px]:text-center" href="https://github.com/ernstlegaspi/local-restaurants" target="_blank" rel="noreferrer">Github Code</a>
			<div className="flex justify-evenly max-[815px]:flex-col max-[815px]:items-center">
				{/* get all the states with the index number */}
				{states.map((state, idx) => (	
					<div className="my-3" key={idx}>
						{/* print the state */}
						<p className="font-bold text-black/70">{state}</p>
						<div className="flex flex-col">
							{/* get all the restaurants per state with its index number */}
							{restaurants?.map((restaurant, index) => idx === index ? (<>
								{/* since it is a 2D array, another loop will be necessary to access per restaurant */}
								{restaurant.map((val, i) => (
									/*
										replace all the spaces in the restaurants name and change it to -
										now in the url, when clicked, the output should be

										before: restaurant name 1
										after: restaurant-name-1
									*/
									<Link key={i} href={`/state/${val.replaceAll(" ",  "-")}`}>
										<p className="text-[10px] text-gray-500">- {val}</p>
									</Link>
								))}
							</>) : null)}
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Homepage
