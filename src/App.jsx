import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
	const get = async (endpoint, options) => {
		const res = await axios.get(endpoint, options)
		console.log(res.data)
		return res.data
	}

	useEffect(() => {
		const data = get('http://localhost:3000/api')
	}, [])
	return (
		<div className='App'>
			<h2>Welcome to my app</h2>
		</div>
	)
}

export default App
