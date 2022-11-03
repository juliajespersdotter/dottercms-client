import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import DotterDB_API from './services/DotterDB_API'
import ContentForm from './components/ContentForm'
import Post from './components/Post'

function App() {
	const { isLoading, isError, data } = useQuery(
		'posts',
		DotterDB_API.showPosts
	)
	return (
		<Container className='App'>
			<h1>Welcome to my app</h1>

			{isError && <p>An error has occurred</p>}

			<ContentForm />

			<div>
				{data &&
					!isLoading &&
					data.map(post => <Post key={post.id} post={post} />)}
			</div>
		</Container>
	)
}

export default App
