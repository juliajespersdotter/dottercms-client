import { useForm } from 'react-hook-form'

const CreatePost = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='createpost-form'>
			<div id='title-container'>
				<label>Title</label>
				<input
					type='text'
					placeholder='Enter a title'
					{...register('title')}
				/>
			</div>

			<div id='content-container'>
				<label>Content</label>
				<textarea
					placeholder='Enter your content here'
					{...register('content')}
				/>
			</div>

			<div id='checkbox-container'>
				<input type='checkbox' />
				<label>Publish Post</label>
			</div>

			<button className='button-primary' type='submit'>
				Save
			</button>
		</form>
	)
}

export default CreatePost
