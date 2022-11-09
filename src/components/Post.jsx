import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Posts_API from '../services/Posts_API'
import { useQueryClient } from 'react-query'

const Post = ({ post }) => {
	const queryClient = useQueryClient()

	const deleteFunction = async () => {
		await Posts_API.deletePost(post.id)
		queryClient.invalidateQueries(['post', post.id])
		queryClient.invalidateQueries('posts')
	}

	return (
		<div id='post-container'>
			<div className='header-container'>
				<h1>{post.title}</h1>
				{post.created_at && (
					<h2>
						Created: {new Date(post.created_at).toLocaleString()}
					</h2>
				)}
			</div>
			{/* {post.updated_at && (
				<Card.Subtitle className='text-muted'>
					Updated: {new Date(post.updated_at).toLocaleString()}
				</Card.Subtitle>
			)} */}
			<div>
				<p>{post.content}</p>
			</div>

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
	)
}

export default Post
