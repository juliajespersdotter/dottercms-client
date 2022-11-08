import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import Posts_API from '../services/Posts_API'
import Post from '../components/Post'
import ContentForm from '../components/ContentForm'
import { useQueryClient } from 'react-query'

const PostPage = () => {
	const queryClient = useQueryClient()
	const { postId } = useParams()
	const { isLoading, isError, data } = useQuery(['post', postId], () =>
		Posts_API.showPost(postId)
	)

	const onSubmit = async data => {
		if (data) {
			const updated_at = new Date().toLocaleString()
			const postInfo = {
				title: data.title,
				content: data.content,
				updated_at: updated_at,
			}
			await Posts_API.updatePost(postId, postInfo)
			queryClient.invalidateQueries(['post', postId])
			queryClient.invalidateQueries('posts')
		}
	}

	return (
		<Container>
			<h1 className='mb-5'>Post {postId}</h1>
			<div>
				{data && !isLoading && <Post key={data.id} post={data} />}
			</div>

			<ContentForm onSubmit={onSubmit} />
		</Container>
	)
}

export default PostPage
