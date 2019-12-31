import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const Countdown = styled.div`
	display: flex;
	font-size: 15em;
	font-family: 'Roboto Mono';
	text-align: center;
	margin: 0;
	padding: 0;
`

const City = styled.span`
	color: lightcoral;
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
`

const App = () => {
	const [now, setNow] = useState(+new Date())

	useEffect(() => {
		const timer = setInterval(() => setNow(+new Date()), 500)
		return () => clearInterval(timer)
	}, [])

	const targetTime = 'January 1, 2020 00:00:00'

	const newYearHereMs = +new Date(targetTime)

	const msLeft = newYearHereMs - now

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
				<City>BAR</City> {`${hhBarnaul}:${mm}:${ss}`}
			</Countdown>
			<Countdown>
				<City>MOS</City> {`${hhMoscow}:${mm}:${ss}`}
			</Countdown>
			<Countdown>
				<City>HII</City> {`${hhHere}:${mm}:${ss}`}
			</Countdown>
		</Container>
	)
}

export default hot(module)(App)
