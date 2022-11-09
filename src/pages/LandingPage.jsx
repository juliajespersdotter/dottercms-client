import { useQuery } from 'react-query'
import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Container from 'react-bootstrap/Container'
import Posts_API from '../services/Posts_API'
import { useAuthContext } from '../contexts/AuthContext'
import ContentForm from '../components/ContentForm'
import Post from '../components/Post'
import { useQueryClient } from 'react-query'

const LandingPage = () => {
	const { currentUser, login } = useAuthContext()
	const queryClient = useQueryClient()
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

	const onSubmit = async data => {
		if (data) {
			const created_at = new Date().toLocaleString()
			const postInfo = {
				title: data.title,
				content: data.content,
				created_at: created_at,
			}
			await Posts_API.publishPost(postInfo)
			queryClient.invalidateQueries('posts')
		}
	}

	return (
		<>
			<Navigation />
			<Container className='content-container'>
				{isError && <p>An error has occurred</p>}

				{/* <ContentForm onSubmit={onSubmit} /> */}

				<div id='content-section'>
					{data &&
						!isLoading &&
						data.map(post => <Post key={post.id} post={post} />)}
				</div>
			</Container>
		</>
	)
}

export default LandingPage
