import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import DotterDB_API from './services/DotterDB_API'
import './App.css'

function App() {
	const { isLoading, isError, data } = useQuery(
		'posts',
		DotterDB_API.showPosts
	)
	return (
		<div className='App'>
			<h2>Welcome to my app</h2>

			{isError && <p>An error has occurred</p>}

			<div>
				{data &&
					!isLoading &&
					data.map(post => (
						<div key={post.id}>
							<h1>{post.title}</h1>
							<p>{post.content}</p>
						</div>
					))}
			</div>
		</div>
	)
}

export default App
