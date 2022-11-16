import { useQuery } from 'react-query'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Posts_API from '../services/Posts_API'
import { useAuthContext } from '../contexts/AuthContext'
import Post from '../components/Post'

const LandingPage = () => {
	const { currentUser, login } = useAuthContext()
	const { isLoading, isError, data } = useQuery('posts', Posts_API.showPosts)
	// console.log(currentUser)

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('userData'))
		// console.log(storedData)
		if (storedData) {
			// login(storedData.token)
			// login with access token
		}
	}, [login])
	return (
		<>
			<Container className='content-container'>
				{isError && <p>An error has occurred</p>}

				<div id='content-section'>
					<h3 className='page-title'>Latest</h3>
					{data &&
						!isLoading &&
						data.map(post => <Post key={post.id} post={post} />)}
				</div>
			</Container>
		</>
	)
}

export default LandingPage
