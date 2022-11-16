import { Link } from 'react-router-dom'
import moment from 'moment'
import Posts_API from '../services/Posts_API'
import { useQueryClient } from 'react-query'

const Post = ({ post }) => {
	const queryClient = useQueryClient()
	const date = new Date(post.created_at).toLocaleDateString()
	const partialpost = post.content.substring(0, 600)

	const deleteFunction = async () => {
		await Posts_API.deletePost(post.id)
		queryClient.invalidateQueries(['post', post.id])
		queryClient.invalidateQueries('posts')
	}

	return (
		<div id='post-container'>
			<div className='header-container'>
				<div className='post-info'>
					{post.created_at && (
						<h2 className='date'>
							{' '}
							{moment(date).format('D MMM')}
						</h2>
					)}

					<h2 className='user-info'>@randomuser</h2>
				</div>
				<div id='content'>
					<h1>{post.title}</h1>
					<p>
						{partialpost}
						<a href={`/${post.id}`} id='partialpost-link'>
							{' '}
							...Read more
						</a>
					</p>
					<div className='post-links'>
						<Link to={`/${post.id}`}>View</Link>

						<Link
							variant='danger'
							className='right-button'
							onClick={deleteFunction}
						>
							Delete
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post
