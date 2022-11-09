import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import Posts_API from '../services/Posts_API'
import { useQueryClient } from 'react-query'

const PostPage = () => {
	const queryClient = useQueryClient()
	const { postId } = useParams()
	const {
		isLoading,
		isError,
		data: post,
	} = useQuery(['post', postId], () => Posts_API.showPost(postId))

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
		<Container className='post-page'>
			{post && (
				<>
					<div className='header-container-post-page'>
						<h1>{post.title}</h1>
						{post.created_at && (
							<h2>
								written by @randomuser on{' '}
								{new Date(post.created_at).toLocaleString()}
							</h2>
						)}
					</div>

					<p className='post-content'>{post.content}</p>
					{/* <div>
				{post && !isLoading && <Post key={post.id} post={post} />}
			</div> */}
				</>
			)}
		</Container>
	)
}

export default PostPage
