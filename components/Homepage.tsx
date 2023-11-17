'use client'

import { restaurantsAndStates } from '@/constants/'
import { useEffect, useState, useRef } from 'react'

const Homepage = () => {
	const [states, setStates] = useState<string[]>([])
	const [restaurants, setRestaurants] = useState<string[][]>()
	const statesRef = useRef<string[]>([])
	const restaurantsRef = useRef<string[][]>([[]])

	useEffect(() => {
		statesRef.current = []
		restaurantsRef.current = []
		setStates([])
		setRestaurants([])

		restaurantsAndStates.map(restaurantAndState => {
			const isStateExisting = statesRef.current.includes(restaurantAndState.state)

			if(isStateExisting) {
				restaurantsRef.current[statesRef.current.indexOf(restaurantAndState.state)].push(restaurantAndState.restaurant_name)

				return
			}

			statesRef.current.push(restaurantAndState.state)
			restaurantsRef.current.push([restaurantAndState.restaurant_name])
		})

		setStates(statesRef.current)
		setRestaurants(restaurantsRef.current)
	}, [])

	return (
		<>
			{states.map((state, idx) => (
				<div key={idx}>
					<p>{state}</p>
					{restaurants?.map((restaurant, index) => idx === index ? <p key={index}>{restaurant}</p> : null)}
				</div>
			))}
		</>
	)
}

export default Homepage
