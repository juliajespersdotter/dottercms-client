import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CreatePost from '../components/CreatePost'

const CreatePostPage = () => {
	return (
		<Container className='content-container'>
			<h1 className='createpost-header'>Create new post</h1>
			<CreatePost />
		</Container>
	)
}

export default CreatePostPage
