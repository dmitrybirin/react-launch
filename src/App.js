import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const Countdown = styled.p`
	display: flex;
	/* flex-direction: row; */
	justify-content: space-between;
	font-size: 15em;
	font-family: 'Roboto';
	text-align: center;
	margin: 0;
	padding: 0;
	min-width: 100%;
`
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
`

const App = () => {
	const [, setCounter] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => setCounter(counter => counter + 1), 1000)
		return () => clearInterval(timer)
	}, [])

	const newYearHereMs = +new Date('January 1, 2020 00:00:00')

	const nowMs = +new Date()

	const msLeft = newYearHereMs - nowMs

	const secondsLeft = Math.floor(msLeft / 1000)
	const minutesLeft = Math.floor(secondsLeft / 60)
	const hoursLeft = Math.floor(minutesLeft / 60)

	const ss = `${secondsLeft % 60}`.padStart(2, '0')
	const mm = `${minutesLeft % 60}`.padStart(2, '0')
	const hhHere = `${hoursLeft}`.padStart(2, '0')
	const hhBarnaul = `${hoursLeft - 5}`.padStart(2, '0')
	const hhMoscow = `${hoursLeft - 1}`.padStart(2, '0')

	return (
		<Container>
			<Countdown>
				<span>BAR</span> {`${hhBarnaul}:${mm}:${ss}`}
			</Countdown>
			<Countdown>
				<span>MOS</span> {`${hhMoscow}:${mm}:${ss}`}
			</Countdown>
			<Countdown>
				<span>HII</span> {`${hhHere}:${mm}:${ss}`}
			</Countdown>
		</Container>
	)
}

export default hot(module)(App)
