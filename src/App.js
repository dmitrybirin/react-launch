import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

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

const App = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => setCounter(counter => counter + 1), 1000)
		return () => clearInterval(timer)
	}, [])

	return (
		<div>
			<Title>This is styled Title!!</Title>
			<SubTitle>Made with React</SubTitle>
			<Counter>{counter}</Counter>
		</div>
	)
}

export default hot(module)(App)
