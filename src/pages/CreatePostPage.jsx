import React from 'react'
import CreatePost from '../components/CreatePost'
import { useQueryClient } from 'react-query'
import Posts_API from '../services/Posts_API'

const CreatePostPage = () => {
	const queryClient = useQueryClient()

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
		<container className='content-container'>
			<h1 className='createpost-header'>Create new post</h1>
			<CreatePost onSubmit={onSubmit} />
		</container>
	)
}

export default CreatePostPage
