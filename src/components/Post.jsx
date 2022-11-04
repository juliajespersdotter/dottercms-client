import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import DotterDB_API from '../services/DotterDB_API'
import { useQueryClient } from 'react-query'

const Post = ({ post }) => {
	const queryClient = useQueryClient()

	const deleteFunction = async () => {
		await DotterDB_API.deletePost(post.id)
		queryClient.invalidateQueries(['post', post.id])
		queryClient.invalidateQueries('posts')
	}

	return (
		<Card className='mb-5 p-3'>
			<Card.Title>{post.title}</Card.Title>
			{post.created_at && (
				<Card.Subtitle className='text-muted'>
					Created: {new Date(post.created_at).toLocaleString()}
				</Card.Subtitle>
			)}
			{post.updated_at && (
				<Card.Subtitle className='text-muted'>
					Updated: {new Date(post.updated_at).toLocaleString()}
				</Card.Subtitle>
			)}
			<Card.Body>
				<Card.Text>{post.content}</Card.Text>
			</Card.Body>

			<Link variant='dark' className='w-25 mt-3' to={`/${post.id}`}>
				View
			</Link>

			<Button variant='danger' onClick={deleteFunction}>
				Delete
			</Button>
		</Card>
	)
}

export default Post
