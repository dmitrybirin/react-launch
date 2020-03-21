import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
	font-size: 30px;
	text-align: center;
	color: blue;
`
const SubTitle = styled.h3`
	font-size: 20px;
	text-align: center;
`
const Counter = styled.p`
	font-size: 200px;
	text-align: center;
`
const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
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
			<SubTitle>Made with React</SubTitle>
			<Counter>{counter}</Counter>
		</Container>
	)
}

export default App
