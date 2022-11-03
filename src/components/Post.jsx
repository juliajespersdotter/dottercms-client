import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Post = ({ post }) => {
	return (
		<Card className='mb-5 p-3'>
			<Card.Title>{post.title}</Card.Title>
			<Card.Subtitle className='text-muted'>
				{post.created_at && new Date(post.created_at).toLocaleString()}
			</Card.Subtitle>
			<Card.Body>
				<Card.Text>{post.content}</Card.Text>
			</Card.Body>

			<Button
				variant='dark'
				className='w-25'
				as={Link}
				to={`/${post.id}`}
			>
				Edit
			</Button>
		</Card>
	)
}

export default Post
