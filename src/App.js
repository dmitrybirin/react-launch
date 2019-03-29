import React, { useState, useEffect } from 'react'
// import { Box, Clock, Stack, Text } from 'grommet';
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import { ReactLogo } from 'styled-icons/fa-brands'

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: blue;
`
const SubTitle = styled.h3`
	font-size: 0.8em;
	text-align: center;
`
const Counter = styled.p`
	font-size: 15em;
	text-align: center;
`
const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`
const Logo = styled(ReactLogo)`
	color: blue;
`

const App = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => setCounter(counter => counter + 1), 1000)
		return () => clearInterval(timer)
	}, [])

	return (
		<Container>
			<Title>This is styled Title!!</Title>
			<Logo size={50} />
			<SubTitle>Made with React</SubTitle>
			<Counter>{counter}</Counter>
		</Container>
	)
}

export default hot(module)(App)
