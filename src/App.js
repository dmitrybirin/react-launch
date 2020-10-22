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

const useFetch = (url, options) => {
	const [result, setResult] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchUrl = () => {
		fetch(url)
			.then(res => res.json())
			.then(setResult)
			.catch(setError)
			.finally(() => setLoading(false))
	}

	useEffect(() => {
		fetchUrl()
		if (options?.polling) {
			const interval = setInterval(fetchUrl, options?.polling)
			return () => clearInterval(interval)
		}
	}, [])

	return { result, loading, error }
}

const App = () => {
	const { result, loading, error } = useFetch('https://swapi.dev/api/people/1/', {
		polling: 3000,
	})

	return (
		<Container>
			<Title>This is styled Title!!</Title>
			<SubTitle>Made with React</SubTitle>
			{error && <p>ERROR! </p>}
			{loading ? <p>Loading..</p> : <Counter>{result.name}</Counter>}
		</Container>
	)
}

export default App
