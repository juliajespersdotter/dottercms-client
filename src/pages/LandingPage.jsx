import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import Posts_API from '../services/Posts_API'
import ContentForm from '../components/ContentForm'
import Post from '../components/Post'
import { useQueryClient } from 'react-query'

const LandingPage = () => {
	const queryClient = useQueryClient()
	const { isLoading, isError, data } = useQuery('posts', Posts_API.showPosts)

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
		<Container className='LandingPage'>
			<h1>Welcome to my app</h1>

			{isError && <p>An error has occurred</p>}

			<ContentForm onSubmit={onSubmit} />

			<div>
				{data &&
					!isLoading &&
					data.map(post => <Post key={post.id} post={post} />)}
			</div>
		</Container>
	)
}

export default LandingPage
