import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DotterDB_API from '../services/DotterDB_API'
import { useQueryClient } from 'react-query'

const ContentForm = () => {
	const queryClient = useQueryClient()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = async data => {
		if (data) {
			const created_at = new Date().toLocaleString()
			console.log(created_at)
			const postInfo = {
				title: data.title,
				content: data.content,
				created_at: created_at,
			}
			await DotterDB_API.publishPost(postInfo)
			queryClient.invalidateQueries('posts')
		}
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)} className='w-50 mb-5'>
			<Form.Group controlId='formTitle' className='mb-3'>
				<Form.Label>Title</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter a title'
					{...register('title')}
				/>
			</Form.Group>

			<Form.Group controlId='formContent' className='mb-3'>
				<Form.Label>Content</Form.Label>
				<Form.Control
					as='textarea'
					placeholder='Enter your content here'
					{...register('content')}
				/>
			</Form.Group>

			<Button variant='primary' type='submit'>
				Save & Publish
			</Button>
		</Form>
	)
}

export default ContentForm
