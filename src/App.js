import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const Countdown = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 15em;
	font-family: 'Roboto Mono';
	text-align: center;
	margin: 0;
	padding: 0;
`

const City = styled.div`
	color: lightcoral;
`

const Time = styled.div`
	min-width: 75vw;
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const App = () => {
	const [now, setNow] = useState(+new Date())

	useEffect(() => {
		const timer = setInterval(() => setNow(+new Date()), 500)
		return () => clearInterval(timer)
	}, [])

	const getTimeString = target => {
		const targetTimeMs = +new Date(target)

		const msLeft = targetTimeMs - now
		const secondsLeft = Math.floor(msLeft / 1000)
		const minutesLeft = Math.floor(secondsLeft / 60)
		const hoursLeft = Math.floor(minutesLeft / 60)

		const ss = `${secondsLeft > 0 ? secondsLeft % 60 : 0}`.padStart(2, '0')
		const mm = `${minutesLeft > 0 ? minutesLeft % 60 : 0}`.padStart(2, '0')
		const hh = `${hoursLeft}`.padStart(2, '0')
		return msLeft > 0 ? `${hh}:${mm}:${ss}` : 'NEW YEAR'
	}

	const targetTimeHere = 'January 1, 2020 00:00:00'

	const targetTimeBar = 'December 31, 2019 19:00:00'

	const targetTimeMos = 'December 31, 2019 23:00:00'

	return (
		<Container>
			<Countdown>
				<City>BAR</City> <Time>{getTimeString(targetTimeBar)}</Time>
			</Countdown>
			<Countdown>
				<City>MOS</City> <Time>{getTimeString(targetTimeMos)}</Time>
			</Countdown>
			<Countdown>
				<City>HII</City> <Time>{getTimeString(targetTimeHere)}</Time>
			</Countdown>
		</Container>
	)
}

export default hot(module)(App)
