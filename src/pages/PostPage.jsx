import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import DotterDB_API from '../services/DotterDB_API'
import Post from '../components/Post'

const PostPage = () => {
	const { postId } = useParams()
	const { isLoading, isError, data } = useQuery(['post', postId], () =>
		DotterDB_API.showPost(postId)
	)

	return (
		<Container>
			<h1 className='mb-5'>Post {postId}</h1>
			<div>
				{data && !isLoading && <Post key={data.id} post={data} />}
			</div>
		</Container>
	)
}

export default PostPage
